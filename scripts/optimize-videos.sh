#!/bin/sh
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VID_DIR="$ROOT/public/videos"

echo "Optimizing gallery videos..."

for f in gallery-3.mp4 IMG_2534.mp4 IMG_0968.mp4 IMG_2419.mp4; do
  src="$VID_DIR/$f"
  [ -f "$src" ] || continue
  tmp="/tmp/${f%.mp4}-opt.mp4"
  ffmpeg -y -i "$src" -c:v libx264 -profile:v main -pix_fmt yuv420p -crf 30 -preset medium \
    -movflags +faststart -an -vf "scale='min(1280,iw)':-2" "$tmp" 2>/dev/null
  mv "$tmp" "$src"
  echo "  $f ($(du -h "$src" | cut -f1))"
done

echo "Video optimization done."
