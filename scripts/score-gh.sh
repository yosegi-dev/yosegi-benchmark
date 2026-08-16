#!/usr/bin/env bash
# Type-check arms G and H, the same way score.sh does A1/A2/B.
#
# Those two arms write into results-g/<host>/ and results-h/<host>/ rather than into
# results/<host>/<arm>/, because their working directory holds a registry or a .d.ts tree
# instead of a copy of the host. The first round scored them by hand, which is how
# results/raw/g-*.txt ended up holding diagnostics for a file that was not the one being
# scored. This script is that step written down: it mirrors each output into
# results/<host>/<arm>/ — the layout silent.mjs reads — and then applies score.sh's protocol.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TSC="$ROOT/node_modules/.bin/tsc"
SUMMARY="$ROOT/results/raw/summary-gh.tsv"

mkdir -p "$ROOT/results/raw"
printf 'host\tarm\terrors\tcodes\n' > "$SUMMARY"

score() { # arm src-dir host
	local arm="$1" srcdir="$2" lib="$3"
	local src="$srcdir/TimelineScreen.stories.tsx"
	if [ ! -f "$src" ]; then
		printf '%s\t%s\tMISSING\t-\n' "$lib" "$arm" >> "$SUMMARY"
		return
	fi

	# silent.mjs looks under results/<host>/<arm>/, so the output lives there too.
	mkdir -p "$ROOT/results/$lib/$arm"
	cp "$src" "$ROOT/results/$lib/$arm/TimelineScreen.stories.tsx"

	local scoredir="$ROOT/hosts/$lib/src/__score__"
	rm -rf "$scoredir"
	mkdir -p "$scoredir"
	cp "$src" "$scoredir/TimelineScreen.stories.tsx"

	local raw="$ROOT/results/raw/$(echo "$arm" | tr 'A-Z' 'a-z')-$lib.txt"
	"$TSC" --noEmit -p "$ROOT/hosts/$lib" > "$raw" 2>&1 || true
	rm -rf "$scoredir"

	local other errors codes
	other=$(grep -c 'error TS' "$raw" || true)
	errors=$(grep 'error TS' "$raw" | grep -c 'TimelineScreen.stories.tsx' || true)
	codes=$(grep 'error TS' "$raw" | grep 'TimelineScreen.stories.tsx' \
		| grep -oE 'TS[0-9]+' | sort | uniq -c | sort -rn \
		| awk '{printf "%s×%s ", $2, $1}' || true)

	if [ "$other" -ne "$errors" ]; then
		echo "WARNING $lib/$arm: $((other - errors)) diagnostics outside the story file" >&2
	fi
	printf '%s\t%s\t%s\t%s\n' "$lib" "$arm" "$errors" "${codes:--}" >> "$SUMMARY"
}

# G ran at all three sizes; H at 20 and 240 only.
for lib in shadcn mui chakra mantine; do
	for size in "" "-m" "-l"; do
		score G "$ROOT/results-g/$lib$size" "$lib$size"
	done
done
for lib in shadcn mui chakra mantine; do
	for size in "" "-l"; do
		score H "$ROOT/results-h/$lib$size" "$lib$size"
	done
done

column -t -s $'\t' "$SUMMARY"
