(function () {
    const portfolioData = {
        northwind: {
            type: 'simple',
            title: 'Northwind Identity',
            category: 'Branding',
            bgGradient: 'linear-gradient(135deg,hsl(215,58%,22%),hsl(215,40%,35%))',
            desc: 'A comprehensive branding mockup covering business cards, letterheads, and digital assets. This simple media showcase features high resolution imagery of the complete visual system designed for Northwind.',
            gallery: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2000' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2000' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1634942536733-14930d6bf4cf?auto=format&fit=crop&q=80&w=2000' }
            ]
        },
        helix: {
            type: 'case_study',
            title: 'Helix Analytics',
            category: 'Product · ICT',
            bgGradient: 'linear-gradient(135deg,hsl(215,60%,15%),hsl(108,60%,25%))',
            overview: 'Helix Analytics requested a custom web dashboard and API integration to monitor enterprise-scale marketing metrics accurately.',
            problem: 'The client had data siloed across multiple platforms, causing reporting blindspots and delaying crucial business decisions.',
            solution: 'We architected a unified cloud-native analytics dashboard with robust backend pipelines to aggregate and sanitize massive datasets in real-time.',
            results: [
                'Cut report generation time by 90%',
                'Integrated 15+ external APIs seamlessly',
                'Adopted by over 200+ internal staff users'
            ],
            gallery: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000' }
            ]
        },
        cadence: {
            type: 'case_study',
            title: 'Cadence Campaign',
            category: 'Marketing',
            bgGradient: 'linear-gradient(135deg,hsl(108,80%,20%),hsl(150,60%,30%))',
            overview: 'A full-scale multi-channel digital marketing campaign crafted to catapult Cadence into the mainstream spotlight.',
            problem: 'Cadence was entering a highly saturated market and needed explosive initial traction to gain consumer confidence.',
            solution: 'Deployed a staggered social media offensive, influencer collaboration, and aggressive PPC advertising, unified by a strong storyline.',
            results: [
                'Increased engagement by 300%',
                'Reached 150,000 unique users',
                'Surpassed sales targets by 45%'
            ],
            gallery: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2000' }
            ]
        },
        atlas: {
            type: 'simple',
            title: 'Atlas Editorial',
            category: 'Print · Media',
            bgGradient: 'linear-gradient(135deg,hsl(260,40%,25%),hsl(215,58%,30%))',
            desc: 'Brand storytelling through premium print elements. A collection of physical editorial design, typography layouts, and media planning collateral crafted for Atlas.',
            gallery: [
                { type: 'image', url: 'https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&q=80&w=2000' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=2000' },
                { type: 'image', url: 'https://images.unsplash.com/photo-1588693959306-651fc67399e0?auto=format&fit=crop&q=80&w=2000' }
            ]
        }
    };

    const root = document.getElementById('portfolio-modal-root');
    if (!root) return;

    // Create Modal Container
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    root.appendChild(modal);

    // Create Lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'pm-lightbox';
    lightbox.innerHTML = `
        <div class="pm-lightbox-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <div class="pm-lightbox-content"></div>
    `;
    root.appendChild(lightbox);

    // Close logic
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        const content = lightbox.querySelector('.pm-lightbox-content');
        setTimeout(() => content.innerHTML = '', 300);
    };

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.closest('.pm-lightbox-close')) closeLightbox();
    });

    const openLightbox = (type, src) => {
        const content = lightbox.querySelector('.pm-lightbox-content');
        if (type === 'video') {
            content.innerHTML = `<video controls autoplay><source src="${src}"></video>`;
        } else {
            content.innerHTML = `<img src="${src}" alt="Gallery Image">`;
        }
        lightbox.classList.add('active');
    };

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

    const renderModal = (id) => {
        const data = portfolioData[id];
        if (!data) return;

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

        modal.innerHTML = `
            <div class="pm-close-btn" id="pm-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div class="pm-hero">
                <div class="pm-hero-bg" style="background: ${data.bgGradient}"></div>
                <div class="pm-hero-overlay"></div>
                <div class="container-tight pm-hero-content">
                    <h1 class="pm-title">${data.title}</h1>
                    <div class="pm-meta">
                        <span>${data.category}</span>
                        ${data.type === 'case_study' ? '<span>Case Study</span>' : '<span>Media Project</span>'}
                    </div>
                </div>
            </div>
            <div class="container-tight pm-content">
                ${contentHtml}

                <div class="pm-gallery">
                    <h3 class="pm-section-title">Project Gallery</h3>
                    <div class="pm-gallery-grid">
                        ${buildGallery(data.gallery)}
                    </div>
                </div>

                <div class="pm-cta-wrapper">
                    <h2 class="pm-section-title" style="font-size: 2rem; color: var(--fg); margin-bottom: 1.5rem;">Have a similar project in mind?</h2>
                    <a href="contact.html" class="btn-accent" style="display: inline-flex; align-items:center; gap:0.5rem;">
                        Start a Similar Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                </div>
            </div>
        `;

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Bind close
        modal.querySelector('#pm-close').addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Bind galleries
        modal.querySelectorAll('.pm-gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                openLightbox(item.getAttribute('data-type'), item.getAttribute('data-src'));
            });
        });
    };

    // Bind original portfolio cards
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const id = item.getAttribute('data-id');
            if (id) renderModal(id);
        });
    });

})();
