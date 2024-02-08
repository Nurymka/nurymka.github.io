/**
 * Script to generate placeholder lowres images
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";

const SRC_DIR = "./assets/webp";
const DEST_DIR = "./assets/lowres";

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR);
}

fs.readdir(SRC_DIR, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const srcPath = path.join(SRC_DIR, file);
    const destPath = path.join(DEST_DIR, file);
    sharp(srcPath)
      .resize(200)
      .blur(5)
      .median()
      .toFile(destPath, (err) => {
        if (err) throw err;
        console.log(`${file} has been processed`);
      });
  });
});
