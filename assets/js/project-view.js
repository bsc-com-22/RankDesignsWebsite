(function () {
    const container = document.getElementById('project-container');
    const lightbox = document.getElementById('pm-lightbox');
    const lightboxContent = lightbox.querySelector('.pm-lightbox-content');

    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId || !window.portfolioData || !window.portfolioData[projectId]) {
        container.innerHTML = `
            <div class="container-tight" style="padding: 10rem 2rem; text-align: center;">
                <h1 class="text-display">Project Not Found</h1>
                <p style="margin: 2rem 0;">Sorry, we couldn't find the project you're looking for.</p>
                <a href="portfolio.html" class="btn-accent">Back to Portfolio</a>
            </div>
        `;
        return;
    }

    const data = window.portfolioData[projectId];

    // Update Page Title
    document.title = `${data.title} — Rank Designs`;

    const buildGallery = (gallery) => {
        return gallery.map(item => `
            <div class="pm-gallery-item" data-type="${item.type}" data-src="${item.url}">
                ${item.type === 'video' ? `<video src="${item.url}" muted loop playsinline></video>` : `<img src="${item.url}" alt="Portfolio piece">`}
                <div class="overlay-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </div>
            </div>
        `).join('');
    };

    let contentHtml = '';
    if (data.type === 'case_study') {
        contentHtml = `
            <div class="pm-grid">
                <div>
                    <h3 class="pm-section-title">Overview</h3>
                    <p class="pm-text" style="margin-bottom: 2rem;">${data.overview}</p>
                    
                    <h3 class="pm-section-title">The Challenge</h3>
                    <p class="pm-text">${data.problem}</p>
                </div>
                <div>
                    <h3 class="pm-section-title">Our Solution</h3>
                    <p class="pm-text" style="margin-bottom: 2rem;">${data.solution}</p>
                    
                    <h3 class="pm-section-title">Results / Achievements</h3>
                    <ul class="pm-results">
                        ${data.results.map(r => `
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                ${r}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else {
        contentHtml = `
            <div class="pm-simple-grid">
                <div>
                    <h3 class="pm-section-title">About this project</h3>
                    <p class="pm-text">${data.desc}</p>
                </div>
                <div></div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="pm-hero">
            <div class="pm-hero-bg" style="background: ${data.bgGradient}"></div>
            <div class="pm-hero-overlay"></div>
            <div class="container-tight pm-hero-content">
                <h1 class="pm-title animate-fade-in">${data.title}</h1>
                <div class="pm-meta animate-fade-in anim-delay-200">
                    <span>${data.category}</span>
                    <span class="meta-sep">•</span>
                    ${data.type === 'case_study' ? '<span>Case Study</span>' : '<span>Media Project</span>'}
                </div>
            </div>
        </div>
        <div class="container-tight pm-content">
            <a href="portfolio.html" class="back-to-portfolio">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Portfolio
            </a>
            
            ${contentHtml}

            <div class="pm-gallery">
                <h3 class="pm-section-title">Project Gallery</h3>
                <div class="pm-gallery-grid">
                    ${buildGallery(data.gallery)}
                </div>
            </div>

            <div class="pm-cta-wrapper">
                <h2 class="pm-section-title" style="font-size: 2.5rem; color: var(--fg); margin-bottom: 1.5rem;">Have a similar project in mind?</h2>
                <p style="margin-bottom: 2.5rem; color: var(--fg-muted); font-size: 1.125rem;">Let's discuss how we can bring your vision to life with our expertise in ${data.category}.</p>
                <a href="contact.html" class="btn-primary" style="display: inline-flex; align-items:center; gap:0.5rem; padding: 1rem 2.5rem;">
                    Start a Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </div>
        </div>
    `;

    // Lightbox Logic
    const openLightbox = (type, src) => {
        if (type === 'video') {
            lightboxContent.innerHTML = `<video controls autoplay><source src="${src}"></video>`;
        } else {
            lightboxContent.innerHTML = `<img src="${src}" alt="Gallery Image">`;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => lightboxContent.innerHTML = '', 300);
    };

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.closest('.pm-lightbox-close')) closeLightbox();
    });

    container.querySelectorAll('.pm-gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(item.getAttribute('data-type'), item.getAttribute('data-src'));
        });
    });

})();
