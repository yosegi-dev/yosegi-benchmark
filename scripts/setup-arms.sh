#!/usr/bin/env bash
# Build one working directory per (host, arm), containing exactly what that arm should
# see. The directories scope the inputs; they do not sandbox reach — isolation is enforced
# by the instruction at the top of each prompt in prompts/, and holds only as far as the
# agent complies (the two audited arms did comply).
#
#   A1  spec + a bare export listing            — library knowledge only
#   A2  spec + the host's source                — what an agent does today
#   B   spec + the host's source + the registry — A2 plus Yosegi
#
# No node_modules anywhere: the protocol scores the first submitted output, so no arm gets
# to typecheck and iterate against the compiler.
#
# Usage: ./scripts/setup-arms.sh [host ...]   (default: every host in hosts/)
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [ "$#" -gt 0 ]; then
	HOSTS=("$@")
else
	HOSTS=()
	for d in "$ROOT"/hosts/*/; do HOSTS+=("$(basename "$d")"); done
fi

for lib in "${HOSTS[@]}"; do
	for arm in A1 A2 B; do
		dir="$ROOT/results/$lib/$arm"
		rm -rf "$dir"
		mkdir -p "$dir"
		cp "$ROOT/docs/SPEC-SCREEN.md" "$dir/SPEC-SCREEN.md"
	done

	"$ROOT/scripts/listing.sh" "$lib" > "$ROOT/results/$lib/A1/LISTING.txt"

	for arm in A2 B; do
		cp -R "$ROOT/hosts/$lib/src" "$ROOT/results/$lib/$arm/src"
		cp "$ROOT/hosts/$lib/tsconfig.json" "$ROOT/results/$lib/$arm/tsconfig.json"
	done

	cp -R "$ROOT/hosts/$lib/.yosegi" "$ROOT/results/$lib/B/.yosegi"
	printf '%-12s A1 %s components listed\n' "$lib" "$(wc -l < "$ROOT/results/$lib/A1/LISTING.txt" | tr -d ' ')"
done
