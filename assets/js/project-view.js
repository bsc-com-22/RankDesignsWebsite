(function () {
    const container = document.getElementById('project-container');
    const lightbox = document.getElementById('pm-lightbox');
    const lightboxContent = lightbox.querySelector('.pm-lightbox-content');

    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId || !window.portfolioData || !window.portfolioData[projectId]) {
        container.innerHTML = `
            <div class="container-tight" style="padding: 15rem 2rem; text-align: center;">
                <h1 class="text-display">Project Not Found</h1>
                <p style="margin: 2rem 0; font-size: 1.25rem;">Sorry, we couldn't find the project you're looking for.</p>
                <a href="portfolio.html" class="btn-accent" style="padding: 1rem 2.5rem; text-decoration:none;">Back to Portfolio</a>
            </div>
        `;
        return;
    }

    const data = window.portfolioData[projectId];

    // Update Page Title
    document.title = `${data.title} — Rank Designs`;

    const buildGallery = (gallery) => {
        return gallery.map(item => {
            if (item.type === 'video') {
                return `
                    <div class="pm-gallery-item pm-gallery-video" data-type="video" data-src="${item.url}">
                        <video src="${item.url}" muted loop playsinline preload="metadata"></video>
                        <div class="overlay-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        </div>
                    </div>`;
            }
            const optimizedUrl = (typeof getImageUrl === 'function') ? getImageUrl(item.url) : item.url;
            return `
                <div class="pm-gallery-item" data-type="image" data-src="${optimizedUrl}">
                    <img src="${optimizedUrl}" alt="Portfolio piece" loading="lazy">
                    <div class="overlay-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                    </div>
                </div>`;
        }).join('');
    };

    let contentHtml = '';
    if (data.type === 'case_study') {
        contentHtml = `
            <div class="pm-grid">
                <div>
                    <span class="label-tag accent-label">· Overview</span>
                    <h3 class="section-title" style="margin-top:0.5rem; font-size:1.8rem; margin-bottom:1rem;">About this Project</h3>
                    <p class="section-body" style="margin-bottom: 2rem;">${data.overview}</p>
                    
                    <h3 class="section-title" style="font-size:1.8rem; margin-bottom:1rem;">The Challenge</h3>
                    <p class="section-body">${data.problem}</p>
                </div>
                <div>
                    <h3 class="section-title" style="font-size:1.8rem; margin-bottom:1rem;">Our Solution</h3>
                    <p class="section-body" style="margin-bottom: 2rem;">${data.solution}</p>
                    
                    <h3 class="section-title" style="font-size:1.8rem; margin-bottom:1rem;">Results / Achievements</h3>
                    <ul class="pm-results">
                        ${data.results.map(r => `
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                <span>${r}</span>
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
                    <span class="label-tag accent-label">· Overview</span>
                    <h3 class="section-title" style="margin-top:0.5rem; font-size:1.8rem; margin-bottom:1rem;">About this project</h3>
                    <p class="section-body">${data.desc}</p>
                </div>
                <div></div>
            </div>
        `;
    }

    const heroImg = (typeof getImageUrl === 'function' && data.coverImg) ? getImageUrl(data.coverImg) : data.coverImg;
    const heroStyle = heroImg ? `background: url('${heroImg}') center/cover no-repeat; opacity: 0.45; position: absolute; inset: 0;` : `background: ${data.bgGradient}; position: absolute; inset: 0; opacity: 0.45;`;

    container.innerHTML = `
        <section class="hero" style="min-height: 50vh;">
            <div class="hero-bg">
                <div style="${heroStyle}"></div>
                <div class="hero-overlay"></div>
                ${heroImg ? '<div class="hero-radial"></div>' : ''}
            </div>
            <div class="hero-float-accent" aria-hidden="true"></div>
            <div class="container-tight hero-content" style="padding-top: 8rem; padding-bottom: 4rem;">
                <div class="hero-inner">
                    <a href="portfolio.html" style="display:inline-flex; align-items:center; gap:0.5rem; color:var(--accent); font-weight:600; font-size:0.875rem; margin-bottom:2.5rem; text-decoration:none; transition: color 0.3s ease;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--accent)'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Portfolio
                    </a>
                    <div class="animate-fade-in-slow" style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        <span class="label-tag accent-label">${data.category}</span>
                        ${data.type === 'case_study' ? '<span class="label-tag" style="background:transparent; border: 1px solid var(--border);">Case Study</span>' : '<span class="label-tag" style="background:transparent; border: 1px solid var(--border);">Media Project</span>'}
                    </div>
                    <h1 class="text-display animate-fade-in-slow anim-delay-200" style="font-size: clamp(2.5rem, 6vw, 4.5rem);">
                        ${data.title}
                    </h1>
                </div>
            </div>
        </section>
        
        <section style="padding: 6rem 0; background: var(--bg);">
            <div class="container-tight">
                <div class="reveal">
                    ${contentHtml}
                </div>

                <div class="pm-gallery reveal" style="margin-top: 6rem;">
                    <span class="label-tag accent-label">· Project Media</span>
                    <h2 class="section-title" style="margin-top: 0.5rem; font-size: 2.2rem; margin-bottom: 2.5rem;">Gallery Highlights</h2>
                    <div class="pm-gallery-grid">
                        ${buildGallery(data.gallery)}
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container-tight">
                <div class="cta-box reveal">
                    <div class="cta-glow-left" aria-hidden="true"></div>
                    <div class="cta-glow-right" aria-hidden="true"></div>
                    <div class="cta-inner">
                        <span class="label-tag accent-label">· Let's build</span>
                        <h2 class="text-display cta-title">Have a similar project in mind?</h2>
                        <p class="cta-sub">Let's discuss how we can bring your vision to life with our expertise in <strong>${data.category.split(' & ')[0]}</strong>.</p>
                        <a href="contact.html" class="btn-accent cta-btn">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Lightbox Logic
    const openLightbox = (type, src) => {
        if (type === 'video') {
            lightboxContent.innerHTML = `<video controls autoplay class="animate-fade-in"><source src="${src}"></video>`;
        } else {
            lightboxContent.innerHTML = `<img src="${src}" alt="Gallery Image" class="animate-fade-in">`;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => lightboxContent.innerHTML = '', 400); // Wait for transition
    };

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.closest('.pm-lightbox-close')) closeLightbox();
    });

    container.querySelectorAll('.pm-gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(item.getAttribute('data-type'), item.getAttribute('data-src'));
        });
    });

    // Automatically trigger intersection observer for injected elements
    if (window.revealObserver) {
        container.querySelectorAll('.reveal').forEach(el => {
            window.revealObserver.observe(el);
        });
    }

})();
