/**
 * Post-export fixes for static hosting (BitNinja / LiteSpeed / Apache):
 * - Rename out/_next → out/next-static and rewrite asset paths
 * - Set directory permissions to 755 and file permissions to 644
 */
import { chmod, readdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");
const fromDir = path.join(outDir, "_next");
const toDir = path.join(outDir, "next-static");
const fromPrefix = "/_next/";
const toPrefix = "/next-static/";

const TEXT_EXTENSIONS = /\.(html|js|css|json|txt|map|xml|webmanifest)$/i;
const FILE_MODE = 0o644;
const DIR_MODE = 0o755;

async function fixPermissions(dir) {
  await chmod(dir, DIR_MODE);
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await fixPermissions(fullPath);
      continue;
    }

    await chmod(fullPath, FILE_MODE);
  }
}

async function rewriteAssetPaths(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await rewriteAssetPaths(fullPath);
      continue;
    }

    if (!TEXT_EXTENSIONS.test(entry.name)) continue;

    const content = await readFile(fullPath, "utf8");
    if (!content.includes(fromPrefix)) continue;

    await writeFile(fullPath, content.replaceAll(fromPrefix, toPrefix), "utf8");
    await chmod(fullPath, FILE_MODE);
  }
}

let renamed = true;

try {
  await rename(fromDir, toDir);
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    console.warn("fix-static-export: out/_next not found, skipping rename");
    renamed = false;
  } else {
    throw error;
  }
}

if (renamed) {
  await rewriteAssetPaths(outDir);
}

await fixPermissions(outDir);

console.log(
  "fix-static-export: set permissions (dirs 755, files 644)" +
    (renamed ? ", renamed _next → next-static and updated asset paths" : ""),
);
