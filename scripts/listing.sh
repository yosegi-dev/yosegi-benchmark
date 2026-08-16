#!/usr/bin/env bash
# Emit the bare component listing handed to arm A1: file paths and export names only,
# no prop information. Deliberately the least an agent could know and still write imports.
# Usage: ./scripts/listing.sh shadcn
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT/hosts/$1"

# grep exits 1 on no match, which under `set -e` with pipefail would abort the whole run
# at the first file whose only exports are `<Name>Props`. Every stage is guarded.
find src \( -name '*.tsx' -o -name '*.ts' \) | sort | while read -r f; do
	names=$(
		{ grep -oE '^export (interface|type|const|function) [A-Za-z0-9_]+' "$f" || true; } \
			| awk '{print $3}' \
			| { grep -vE 'Props$' || true; } \
			| paste -sd', ' -
	)
	if [ -n "$names" ]; then echo "$f — $names"; fi
done

# The loop's status is whatever its last iteration left behind, which is not a result.
exit 0
