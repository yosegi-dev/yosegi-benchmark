#!/usr/bin/env bash
# Build the working directories for experiments E (Screen JSON route), F (implementation
# handoff), and G (registry only). The audit found these three were assembled inline and
# unreproducible from the repository; this script closes that.
#
# Same caveat as setup-arms.sh, stated honestly this time: the directories scope what an
# arm SHOULD see, but nothing sandboxes reach — isolation is enforced by the instruction at
# the top of each prompt in prompts/, and holds only as far as the agent complies.
#
# Usage: ./scripts/setup-efg.sh [E|F|G|H ...]   (default: all four)
#
# F is the one section that reads another arm's output — it starts from an approved B
# story — so a full run has to wait for A1/A2/B. Naming sections lets E, G, and H be built
# and run first without F aborting the script, and without a later full run wiping the
# outputs those arms have already written.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

SECTIONS=("$@")
if [ "${#SECTIONS[@]}" -eq 0 ]; then SECTIONS=(E F G H); fi
want() { for s in "${SECTIONS[@]}"; do [ "$s" = "$1" ] && return 0; done; return 1; }

# E — static screen, route comparison. Both arms get source + registry; only the route
# differs (prompts/ E arms). S-size hosts only.
if want E; then
for lib in shadcn mui chakra mantine; do
	for arm in direct json; do
		dir="$ROOT/results-e/$lib/$arm"
		rm -rf "$dir"; mkdir -p "$dir"
		cp "$ROOT/docs/SPEC-STATIC.md" "$dir/"
		cp -R "$ROOT/hosts/$lib/src" "$dir/src"
		rm -rf "$dir/src/__screens__"
		cp "$ROOT/hosts/$lib/tsconfig.json" "$dir/"
		cp -R "$ROOT/hosts/$lib/.yosegi" "$dir/.yosegi"
	done
done
echo "E: 8 dirs"
fi

# F — implementation handoff, on the hosts whose approved story is render-style (the only
# style story import reads; 21 of 24 approved stories are args-style and out of scope).
if want F; then
for pair in "shadcn-l:results/shadcn-l/B" "mantine:results/mantine/B"; do
	lib="${pair%%:*}"; srcstory="${pair##*:}"
	for arm in F1 F2; do
		dir="$ROOT/results-f/$lib/$arm"
		rm -rf "$dir"; mkdir -p "$dir"
		cp "$ROOT/docs/SPEC-IMPL.md" "$dir/"
		cp "$ROOT/$srcstory/TimelineScreen.stories.tsx" "$dir/"
		cp -R "$ROOT/hosts/$lib/src" "$dir/src"
		rm -rf "$dir/src/__screens__"
		cp "$ROOT/hosts/$lib/tsconfig.json" "$dir/"
	done
	cp -R "$ROOT/hosts/$lib/.yosegi" "$ROOT/results-f/$lib/F2/.yosegi"
done
echo "F: 4 dirs"
fi

# G — spec + registry, no source. All three sizes: the near-miss families exist only at M
# and L, and G unmeasured there was an audit finding.
if want G; then
for lib in shadcn mui chakra mantine; do
	for size in "" "-m" "-l"; do
		dir="$ROOT/results-g/$lib$size"
		rm -rf "$dir"; mkdir -p "$dir"
		cp "$ROOT/docs/SPEC-SCREEN.md" "$dir/"
		cp -R "$ROOT/hosts/$lib$size/.yosegi" "$dir/.yosegi"
	done
done
echo "G: 12 dirs"
fi

# H — spec + emitted declarations, no source. The package-consumer arm: the .d.ts tree is
# what node_modules would hold for a design system consumed as a compiled package. Sizes 20
# and 240 (the near-miss families exist only at 80/240).
if want H; then
for host in shadcn mui chakra mantine shadcn-l mui-l chakra-l mantine-l; do
	dir="$ROOT/results-h/$host"
	rm -rf "$dir"; mkdir -p "$dir"
	cp "$ROOT/docs/SPEC-SCREEN.md" "$dir/"
	"$ROOT/node_modules/.bin/tsc" -p "$ROOT/hosts/$host" \
		--declaration --emitDeclarationOnly --noEmit false \
		--rootDir "$ROOT/hosts/$host/src" --outDir "$dir/types"
done
echo "H: 8 dirs"
fi
