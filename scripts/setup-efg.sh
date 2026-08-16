#!/usr/bin/env bash
# Build the working directories for experiments E (Screen JSON route), F (implementation
# handoff), and G (registry only). The audit found these three were assembled inline and
# unreproducible from the repository; this script closes that.
#
# Same caveat as setup-arms.sh, stated honestly this time: the directories scope what an
# arm SHOULD see, but nothing sandboxes reach — isolation is enforced by the instruction at
# the top of each prompt in prompts/, and holds only as far as the agent complies.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# E — static screen, route comparison. Both arms get source + registry; only the route
# differs (prompts/ E arms). S-size hosts only.
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

# F — implementation handoff, on the hosts whose approved story is render-style (the only
# style story import reads; 21 of 24 approved stories are args-style and out of scope).
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

# G — spec + registry, no source. All three sizes: the near-miss families exist only at M
# and L, and G unmeasured there was an audit finding.
for lib in shadcn mui chakra mantine; do
	for size in "" "-m" "-l"; do
		dir="$ROOT/results-g/$lib$size"
		rm -rf "$dir"; mkdir -p "$dir"
		cp "$ROOT/docs/SPEC-SCREEN.md" "$dir/"
		cp -R "$ROOT/hosts/$lib$size/.yosegi" "$dir/.yosegi"
	done
done

echo "E: 8 dirs, F: 4 dirs, G: 12 dirs"

# H — spec + emitted declarations, no source. The package-consumer arm: the .d.ts tree is
# what node_modules would hold for a design system consumed as a compiled package. Sizes 20
# and 240 (the near-miss families exist only at 80/240).
for host in shadcn mui chakra mantine shadcn-l mui-l chakra-l mantine-l; do
	dir="$ROOT/results-h/$host"
	rm -rf "$dir"; mkdir -p "$dir"
	cp "$ROOT/docs/SPEC-SCREEN.md" "$dir/"
	"$ROOT/node_modules/.bin/tsc" -p "$ROOT/hosts/$host" \
		--declaration --emitDeclarationOnly --noEmit false \
		--rootDir "$ROOT/hosts/$host/src" --outDir "$dir/types"
done
echo "H: 8 dirs"
