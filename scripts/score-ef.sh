#!/usr/bin/env bash
# Type-check experiment E stories and experiment F pages against their hosts.
# Same protocol as score.sh: drop the file in, compile, count only its diagnostics.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TSC="$ROOT/node_modules/.bin/tsc"

check() { # host file label
	local host="$1" file="$2" label="$3"
	if [ ! -f "$file" ]; then
		printf '%-16s %-8s MISSING\n' "$label" ""
		return
	fi
	local scoredir="$ROOT/hosts/$host/src/__score__"
	rm -rf "$scoredir"; mkdir -p "$scoredir"
	cp "$file" "$scoredir/$(basename "$file")"
	local raw="$ROOT/results/raw/ef-$label.txt"
	"$TSC" --noEmit -p "$ROOT/hosts/$host" > "$raw" 2>&1 || true
	rm -rf "$scoredir"
	local errors
	errors=$(grep 'error TS' "$raw" | grep -c "$(basename "$file")" || true)
	local codes
	codes=$(grep 'error TS' "$raw" | grep "$(basename "$file")" \
		| grep -oE 'TS[0-9]+' | sort | uniq -c | sort -rn \
		| awk '{printf "%s×%s ", $2, $1}' || true)
	printf '%-16s errors=%-3s %s\n' "$label" "$errors" "${codes:--}"
}

echo "== E: static screen, direct vs Screen JSON =="
for lib in shadcn mui chakra mantine; do
	check "$lib" "$ROOT/results-e/$lib/direct/ModerationScreen.stories.tsx" "$lib-direct"
	check "$lib" "$ROOT/results-e/$lib/json/ModerationScreen.stories.tsx" "$lib-json"
done

echo
echo "== E: validation rounds (json arm) =="
for lib in shadcn mui chakra mantine; do
	n=$(ls "$ROOT/results-e/$lib/json/attempts/"*-result.json 2>/dev/null | wc -l | tr -d ' ')
	printf '%-16s rounds=%s\n' "$lib" "$n"
done

echo
echo "== F: implementation, story-only vs story import + screen context =="
check "shadcn-l" "$ROOT/results-f/shadcn-l/F1/timeline-page.tsx" "shadcn-l-F1"
check "shadcn-l" "$ROOT/results-f/shadcn-l/F2/timeline-page.tsx" "shadcn-l-F2"
check "mantine" "$ROOT/results-f/mantine/F1/timeline-page.tsx" "mantine-F1"
check "mantine" "$ROOT/results-f/mantine/F2/timeline-page.tsx" "mantine-F2"
