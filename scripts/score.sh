#!/usr/bin/env bash
# Type-check each arm's story against its host and record the diagnostics.
#
# One arm at a time: the file is dropped into the host, compiled, and removed again. The
# hosts themselves compile clean, so every diagnostic reported here belongs to the arm's
# output. Arms never had node_modules, so none of them got to iterate against the compiler
# first — this is the first time any of these files meets tsc, which is the protocol.
set -euo pipefail

#
# Usage: ./scripts/score.sh [host ...]   (default: every host in hosts/)
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TSC="$ROOT/node_modules/.bin/tsc"
SUMMARY="$ROOT/results/raw/summary.tsv"

if [ "$#" -gt 0 ]; then
	HOSTS=("$@")
else
	HOSTS=()
	for d in "$ROOT"/hosts/*/; do HOSTS+=("$(basename "$d")"); done
fi

mkdir -p "$ROOT/results/raw"
printf 'host\tarm\terrors\tcodes\n' > "$SUMMARY"

for lib in "${HOSTS[@]}"; do
	for arm in A1 A2 B; do
		src="$ROOT/results/$lib/$arm/TimelineScreen.stories.tsx"
		if [ ! -f "$src" ]; then
			printf '%s\t%s\tMISSING\t-\n' "$lib" "$arm" >> "$SUMMARY"
			continue
		fi

		scoredir="$ROOT/hosts/$lib/src/__score__"
		rm -rf "$scoredir"
		mkdir -p "$scoredir"
		cp "$src" "$scoredir/TimelineScreen.stories.tsx"

		raw="$ROOT/results/raw/$lib-$arm.txt"
		"$TSC" --noEmit -p "$ROOT/hosts/$lib" > "$raw" 2>&1 || true
		rm -rf "$scoredir"

		# Only diagnostics whose file is the arm's story. A host that stopped compiling
		# would be a setup bug, so surface it rather than folding it into the count.
		# grep -c prints 0 and exits 1 on no match, so a `|| echo 0` fallback would
		# append a second line and break the comparison below.
		other=$(grep -c 'error TS' "$raw" || true)
		errors=$(grep 'error TS' "$raw" | grep -c 'TimelineScreen.stories.tsx' || true)
		codes=$(grep 'error TS' "$raw" | grep 'TimelineScreen.stories.tsx' \
			| grep -oE 'TS[0-9]+' | sort | uniq -c | sort -rn \
			| awk '{printf "%s×%s ", $2, $1}' || true)

		if [ "$other" -ne "$errors" ]; then
			echo "WARNING $lib/$arm: $((other - errors)) diagnostics outside the story file" >&2
		fi
		printf '%s\t%s\t%s\t%s\n' "$lib" "$arm" "$errors" "${codes:--}" >> "$SUMMARY"
	done
done

column -t -s $'\t' "$SUMMARY"
