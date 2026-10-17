#!/bin/sh
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG_DIR="$ROOT/public/images"

if [ ! -d "$IMG_DIR" ]; then
  echo "No images directory: $IMG_DIR" >&2
  exit 1
fi

echo "Optimizing images → WebP (max 1200px, quality 82)..."

find "$IMG_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) | while read -r src; do
  out="${src%.*}.webp"
  convert "$src" -auto-orient -strip -resize '1200x1200>' -quality 82 "$out"
  echo "  $(basename "$src") → $(basename "$out") ($(du -h "$out" | cut -f1))"
  rm -f "$src"
done

# OG image (keep jpg for social crawlers, but compress)
if [ -f "$ROOT/public/og.jpg" ]; then
  convert "$ROOT/public/og.jpg" -auto-orient -strip -resize '1200x630>' -quality 85 "$ROOT/public/og.jpg"
  echo "  optimized og.jpg"
fi

echo "Image optimization done."
