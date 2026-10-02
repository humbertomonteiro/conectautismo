import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import path from "path";

const inputDir = "src/assets/imgs/stands";
const outputDir = "src/assets/imgs/stands/optimized";

mkdirSync(outputDir, { recursive: true });

const files = readdirSync(inputDir).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const name = path.parse(file).name.toLowerCase();
  const output = path.join(outputDir, `${name}.webp`);

  await sharp(path.join(inputDir, file))
    .rotate() // respeita a orientação EXIF (fotos de celular)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  console.log(`✔ ${file} -> ${output}`);
}
