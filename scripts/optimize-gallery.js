import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const GALLERY_ROOT = path.resolve('src/assets/images/GALLERY');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getFiles(fullPath, files);
    } else if (/\.(jpe?g|png|JPG|JPEG|PNG)$/.test(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function optimizeImages() {
  console.log('🔍 Scanning gallery directory:', GALLERY_ROOT);
  const rawImages = getFiles(GALLERY_ROOT);

  if (rawImages.length === 0) {
    console.log('✨ All images in src/assets/images/GALLERY are already optimized!');
    return;
  }

  console.log(`⚡ Found ${rawImages.length} uncompressed image(s) to optimize and minify...`);

  let count = 0;
  for (const file of rawImages) {
    const ext = path.extname(file);
    const dest = file.slice(0, -ext.length) + '.webp';
    const originalSize = fs.statSync(file).size;

    try {
      execSync(
        `convert "${file}" -strip -resize "1280x1280>" -quality 78 "${dest}"`,
        { stdio: 'pipe' }
      );

      const optimizedSize = fs.statSync(dest).size;
      const savedPercent = Math.round(((originalSize - optimizedSize) / originalSize) * 100);

      fs.unlinkSync(file);
      count++;
      console.log(
        `✅ Optimized: ${path.basename(file)} -> ${path.basename(dest)} (${(originalSize / 1024).toFixed(1)}KB -> ${(optimizedSize / 1024).toFixed(1)}KB, ${savedPercent}% smaller)`
      );
    } catch (err) {
      console.warn(`⚠️ Could not convert ${file}:`, err.message);
    }
  }

  console.log(`🎉 Finished optimizing ${count} gallery image(s).`);
}

optimizeImages();
