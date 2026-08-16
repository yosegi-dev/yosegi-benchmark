#!/usr/bin/env bash
# Build a Yosegi registry for one benchmark host.
# Usage: ./scripts/build-registry.sh shadcn
#
# YOSEGI_BIN points at the CLI under test. It defaults to the published package so the
# repository stands alone; set it to a local checkout's bin/yosegi.js to measure a build
# that is not released yet. Whichever it is gets recorded in the registry's builtWith.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
YOSEGI_BIN="${YOSEGI_BIN:-}"
HOST="$ROOT/hosts/$1"

if [ -n "$YOSEGI_BIN" ]; then
	run_yosegi() { node "$YOSEGI_BIN" "$@"; }
else
	run_yosegi() { npx --yes @yosegi/yosegi "$@"; }
fi

cd "$HOST"
# Both extensions: the models live in src/models.ts, and a .tsx-only glob leaves the types
# that props are declared through outside --source's range.
run_yosegi registry build \
	--source "src/**/*.tsx" \
	--source "src/**/*.ts" \
	--tsconfig ./tsconfig.json \
	--data-dir .yosegi \
	--report .yosegi/report.json
