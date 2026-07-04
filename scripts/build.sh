#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOCKDIR="$ROOT/.build.lock"
PIDFILE="$LOCKDIR/pid"

if [[ -d "$LOCKDIR" ]]; then
  if [[ -f "$PIDFILE" ]] && kill -0 "$(cat "$PIDFILE")" 2>/dev/null; then
    echo "error: astro build already running (pid $(cat "$PIDFILE"))" >&2
    exit 1
  fi
  rm -rf "$LOCKDIR"
fi

mkdir "$LOCKDIR"
echo $$ > "$PIDFILE"
trap 'rm -rf "$LOCKDIR"' EXIT

cd "$ROOT"
bunx astro sync
exec bunx astro build "$@"
