const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const htmlFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.html'));
htmlFiles.push('assets/js/portfolio-renderer.js');

htmlFiles.forEach(file => {
    const fullPath = path.join(directoryPath, file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace JS rendering part in portfolio-renderer.js
    if (file.endsWith('portfolio-renderer.js')) {
        content = content.replace(
            /<div class="portfolio-img" style="background: url\('\${optimizedUrl}'\) center\/cover no-repeat;">[\s\n]*<\/div>/g,
            '<img class="portfolio-img" src="${optimizedUrl}" alt="${data.title}" />'
        );
        // Also remove spanClass usage
        content = content.replace(/\$\{spanClass\}/g, '');
    } else {
        // Regex to match the div with background image or gradient
        // Pattern: <div class="portfolio-img" style="background: url('...') center/cover">...</div>
        // or style="background: linear-gradient(...)"

        // Remove col-large, col-medium, col-small, col-5, col-6, col-7
        content = content.replace(/col-(large|medium|small|1|2|3|4|5|6|7|8|9|10|11|12)/g, '');

        let changed = false;

        // Replace background URLs with img tags
        const regexUrl = /<div class="portfolio-img"[\s\n]*style="background:\s*url\('([^']+)'\)[^"]*">[\s\S]*?<\/div>/gi;
        if (regexUrl.test(content)) {
            content = content.replace(regexUrl, '<img class="portfolio-img" src="$1" alt="Portfolio Image" />');
            changed = true;
        }

        // Some have gradients. We can keep the div for gradients but we don't have aspect-ratio anymore, so they'd be 0 height.
        // The user was fixing "gallery/portfolio image display", which means real images. If there are gradients, they might disappear.
        // Let's replace gradient divs with a placeholder img or at least make them divs with aspect-ratio inline.
        const regexGrad = /<div class="portfolio-img"[\s\n]*style="background:\s*(linear-gradient[^"]+)">([\s\S]*?)<\/div>/gi;
        if (regexGrad.test(content)) {
            content = content.replace(regexGrad, '<div class="portfolio-img" style="background: $1; aspect-ratio: 4/3;">$2</div>');
            changed = true;
        }

        // Just in case double quotes are used instead of single quotes for url
        const regexUrl2 = /<div class="portfolio-img"[\s\n]*style="background:\s*url\(&#39;([^']+)&#39;\)[^"]*">[\s\S]*?<\/div>/gi;
        if (regexUrl2.test(content)) {
            content = content.replace(regexUrl2, '<img class="portfolio-img" src="$1" alt="Portfolio Image" />');
            changed = true;
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Processed', file);
});
