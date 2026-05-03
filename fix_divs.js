const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const htmlFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const fullPath = path.join(directoryPath, file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');

    // Fix orphaned </div> after <img class="portfolio-img" ...>
    const regexRemoveDiv = /(<img class="portfolio-img" [^>]+>)\s*<\/div>/g;
    if (regexRemoveDiv.test(content)) {
        content = content.replace(regexRemoveDiv, '$1');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed div in', file);
    }
});
