const fs = require('fs');
const path = require('path');
const { cloudinary } = require('./cloudinary-service');

// Directory containing images
const imagesDir = path.join(__dirname, 'assets', 'images', 'projects');

/**
 * Recursively get all files in a directory
 */
const getFiles = (dir, files = []) => {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files);
        } else {
            if (/\.(jpg|jpeg|png|gif|webp|svg|mp4)$/i.test(name)) {
                files.push(name);
            }
        }
    }
    return files;
};

/**
 * Upload a single file to Cloudinary
 */
const uploadFile = async (filePath) => {
    try {
        // Determine public ID based on relative path
        const relativePath = path.relative(imagesDir, filePath);
        const folder = 'rank-designs/' + path.dirname(relativePath).replace(/\\/g, '/');
        const fileName = path.basename(filePath, path.extname(filePath));
        const publicId = fileName;

        const resourceType = filePath.endsWith('.mp4') ? 'video' : 'image';

        const result = await cloudinary.uploader.upload(filePath, {
            folder: folder,
            public_id: publicId,
            resource_type: resourceType,
            overwrite: true,
            use_filename: true,
            unique_filename: false
        });

        console.log(`✅ Uploaded: ${relativePath} -> ${result.secure_url}`);
        return {
            local: 'assets/images/projects/' + relativePath.replace(/\\/g, '/'),
            cloudinary: result.secure_url,
            publicId: result.public_id
        };
    } catch (error) {
        console.error(`❌ Error uploading ${filePath}:`, error.message);
        return null;
    }
};

/**
 * Main function to upload all images
 */
const uploadAll = async () => {
    console.log('🚀 Starting Cloudinary upload...');

    if (!process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME === 'your_cloud_name') {
        console.error('❌ Please configure your .env file with actual Cloudinary credentials first!');
        return;
    }

    const files = getFiles(imagesDir);
    const results = [];

    for (const file of files) {
        const res = await uploadFile(file);
        if (res) results.push(res);
    }

    // Save mapping for future reference
    fs.writeFileSync('cloudinary-mapping.json', JSON.stringify(results, null, 2));
    console.log('\n✨ Upload complete! Mapping saved to cloudinary-mapping.json');
};

uploadAll();
