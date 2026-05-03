const fs = require('fs');
const path = require('path');

const files = [
    'about.html',
    'commercial-printing.html',
    'digital-marketing.html',
    'graphic-design.html',
    'ict-solutions.html',
    'media-consultancy.html',
    'portfolio.html',
    'project.html',
    'services.html'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Update navigation desktop
    // Find <nav class="desktop-nav"> ... </nav>
    // We will do a generic replacement for the nav
    // We need to keep the "class='active'" if it exists for the specific page. Wait, a simple string replace is safer.

    // Let's replace:
    // <a href="about.html"
    // to include index.html first.

    // Better: replace entire block if it roughly matches:
    content = content.replace(
        /<nav class="desktop-nav">([\s\S]*?)<\/nav>/g,
        (match, inner) => {
            let newInner = inner.replace(/<a href="about.html"/g, '<a href="index.html">Home</a>\n                <a href="about.html"');
            newInner = newInner.replace(/>Portfolio<\/a>/g, '>Portfolio / Projects</a>');
            return `<nav class="desktop-nav">${newInner}</nav>`;
        }
    );

    // 2. Update navigation mobile
    content = content.replace(
        /<div class="container-tight mobile-nav">([\s\S]*?)<a href="contact.html" class="btn-primary mobile-cta">/g,
        (match, inner) => {
            let newInner = inner.replace(/<a href="about.html"/g, '<a href="index.html" class="mobile-link">Home</a>\n                <a href="about.html"');
            newInner = newInner.replace(/>Portfolio<\/a>/g, '>Portfolio / Projects</a>');
            return `<div class="container-tight mobile-nav">${newInner}<a href="contact.html" class="btn-primary mobile-cta">`;
        }
    );

    // 3. Update footer contact
    content = content.replace(
        /<li>\+265 999 010 284<\/li>[\s]*<li>\+265 888 010 284<\/li>[\s]*<li>Blantyre, Malawi<\/li>/g,
        '<li>+265 881 060 045</li>\n                        <li>Blantyre, Malawi, P.O Box 413</li>'
    );

    // 4. Remove privacy and terms
    content = content.replace(
        /<div class="footer-links">[\s]*<a href="#">Privacy Policy<\/a>[\s]*<a href="#">Terms of Service<\/a>[\s]*<\/div>/g,
        '<div class="footer-links">\n                </div>'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
});
