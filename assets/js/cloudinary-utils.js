/**
 * Cloudinary Frontend Utility — Rank Designs
 * Configuration and helper for delivering optimized images.
 */

const CLOUDINARY_CONFIG = {
    cloudName: 'dvqcnucux', // Replace with your cloud name
    isCloudinaryEnabled: true // Toggle this once images are uploaded
};

/**
 * Transforms a local image path to a Cloudinary URL if enabled.
 * If cloudinary is disabled, returns the local path.
 * 
 * @param {string} localPath - e.g., "assets/images/projects/NCHE/image.jpg"
 * @param {string} transformations - e.g., "f_auto,q_auto,w_800"
 */
function getImageUrl(localPath, transformations = 'f_auto,q_auto') {
    if (!CLOUDINARY_CONFIG.isCloudinaryEnabled) {
        return localPath;
    }

    // Convert local path to Cloudinary public ID
    // Assumption: we uploaded assets/images/projects/ to the 'rank-designs/' folder
    // assets/images/projects/NCHE/image.jpg -> rank-designs/NCHE/image
    const cleanPath = localPath.replace('assets/images/projects/', '');
    const pathWithoutExt = cleanPath.split('.').slice(0, -1).join('.');
    const publicId = `rank-designs/${pathWithoutExt}`;

    return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/${transformations}/${publicId}`;
}

/**
 * Scans the DOM for any images whose src points to the project images folder
 * and replaces them with optimized Cloudinary URLs.
 */
function autoOptimizeProjectImages() {
    if (!CLOUDINARY_CONFIG.isCloudinaryEnabled) return;

    const images = document.querySelectorAll('img[src*="assets/images/projects/"]');
    images.forEach(img => {
        const localPath = img.getAttribute('src');
        img.src = getImageUrl(localPath);
    });

    // Also handle background images in inline styles
    const elWithBg = document.querySelectorAll('[style*="assets/images/projects/"]');
    elWithBg.forEach(el => {
        const style = el.getAttribute('style');
        const match = style.match(/url\(['"]?(assets\/images\/projects\/[^'"]+)['"]?\)/);
        if (match) {
            const localPath = match[1];
            const optimizedUrl = getImageUrl(localPath);
            el.style.backgroundImage = `url('${optimizedUrl}')`;
        }
    });
}

// Run on load if enabled
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoOptimizeProjectImages);
} else {
    autoOptimizeProjectImages();
}

window.getImageUrl = getImageUrl;
window.autoOptimizeProjectImages = autoOptimizeProjectImages;
