const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure cloudinary with values from .env
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

/**
 * Optimizes an image URL from Cloudinary.
 * @param {string} publicId - The public ID of the image on Cloudinary
 * @param {object} options - Custom transformations
 * @returns {string} The optimized URL
 */
const getOptimizedUrl = (publicId, options = {}) => {
    return cloudinary.url(publicId, {
        fetch_format: 'auto',
        quality: 'auto',
        ...options
    });
};

module.exports = {
    cloudinary,
    getOptimizedUrl
};
