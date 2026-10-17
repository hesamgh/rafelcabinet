#!/bin/sh
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/out"
ZIP_FILE="$ROOT/out.zip"

if [ ! -d "$OUT_DIR" ]; then
  echo "Directory not found: $OUT_DIR" >&2
  exit 1
fi

# Ensure deployable permissions before packaging (dirs 755, files 644).
find "$OUT_DIR" -type d -exec chmod 755 {} +
find "$OUT_DIR" -type f -exec chmod 644 {} +

rm -f "$ZIP_FILE"
(cd "$OUT_DIR" && zip -qr "$ZIP_FILE" .)

echo "Created $ZIP_FILE ($(du -h "$ZIP_FILE" | cut -f1))"
