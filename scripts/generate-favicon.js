const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_LOGO = path.join(__dirname, '../public/images/logo.png');
const FAVICON_DIR = path.join(__dirname, '../public/favicon');

// Create favicon directory if it doesn't exist
if (!fs.existsSync(FAVICON_DIR)) {
  fs.mkdirSync(FAVICON_DIR, { recursive: true });
}

// Sizes for various favicon versions
const sizes = [16, 32, 48, 64, 128, 192, 256, 512];

async function generateFavicons() {
  try {
    // Create different sizes
    for (const size of sizes) {
      await sharp(SOURCE_LOGO)
        .resize(size, size)
        .toFile(path.join(FAVICON_DIR, `favicon-${size}x${size}.png`));
      
      console.log(`Generated favicon-${size}x${size}.png`);
    }

    // Create favicon.ico (multi-size ico file)
    // Since we can't directly create .ico files with sharp, we'll use the 32x32 PNG as favicon.ico
    await sharp(SOURCE_LOGO)
      .resize(32, 32)
      .toFile(path.join(FAVICON_DIR, 'favicon.ico'));
    
    console.log('Generated favicon.ico');

    // Create apple touch icon
    await sharp(SOURCE_LOGO)
      .resize(180, 180)
      .toFile(path.join(FAVICON_DIR, 'apple-touch-icon.png'));
    
    console.log('Generated apple-touch-icon.png');

    console.log('All favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 