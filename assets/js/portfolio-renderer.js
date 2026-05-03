/**
 * Portfolio Renderer — Rank Designs
 * Dynamically renders portfolio items from portfolioData into the grid.
 */
(function () {
    const portfolioContainer = document.querySelector('.portfolio-grid');
    if (!portfolioContainer) return;

    // Pattern for magazine-style spans (12-column grid)
    const spanPatterns = [
        'col-large',  // 8
        'col-small',  // 4
        'col-small',  // 4
        'col-medium', // 6
        'col-small',  // 4 (Wraps)
        'col-medium', // 6
        'col-small',  // 4
        'col-large',  // 8
        'col-medium', // 6
        'col-small'   // 4
    ];

    function showLoading() {
        portfolioContainer.innerHTML = `
            <div class="portfolio-loading">
                <div class="loading-spinner"></div>
                <p class="loading-text">Loading amazing work…</p>
            </div>
        `;
    }

    function showEmpty(filterLabel) {
        portfolioContainer.innerHTML = `
            <div class="portfolio-empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                <h3>No projects found</h3>
                <p>No projects match the <em>${filterLabel}</em> filter yet — check back soon.</p>
            </div>
        `;
    }

    function renderPortfolio(filter = 'all', limit = null) {
        if (!window.portfolioData) return;

        portfolioContainer.innerHTML = '';
        const projectIds = Object.keys(window.portfolioData);
        let itemsProcessed = 0;

        projectIds.forEach((id, index) => {
            const data = window.portfolioData[id];

            // Filter logic
            const categoryMatch = filter === 'all' ||
                data.category.toLowerCase().includes(filter.toLowerCase()) ||
                (data.tags && data.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));

            if (!categoryMatch) return;
            if (limit && itemsProcessed >= limit) return;

            const spanClass = spanPatterns[itemsProcessed % spanPatterns.length];
            const optimizedUrl = (typeof getImageUrl === 'function') ? getImageUrl(data.coverImg) : data.coverImg;

            const article = document.createElement('article');
            article.className = `portfolio-item reveal`;
            article.setAttribute('data-category', data.category.toLowerCase());
            article.setAttribute('data-id', id);
            article.style.cursor = 'pointer';
            // Staggered animation delay
            article.style.setProperty('--delay', (itemsProcessed * 60) + 'ms');

            article.innerHTML = `
                <img class="portfolio-img" src="${optimizedUrl}" alt="${data.title}" loading="lazy" />
                <div class="portfolio-overlay"></div>
                <div class="portfolio-hover-info">
                    <div class="portfolio-tag-hover">${data.category}</div>
                    <h3>${data.title}</h3>
                </div>
                <div class="portfolio-tag-badge">
                    <span class="tag-dot"></span>
                    ${data.category.split('&')[0].trim()}
                </div>
            `;

            article.addEventListener('click', () => {
                window.location.href = `project.html?id=${id}`;
            });

            portfolioContainer.appendChild(article);
            itemsProcessed++;

            // Re-trigger intersection observer for the new elements
            if (window.revealObserver) {
                window.revealObserver.observe(article);
            }
        });

        // Show empty state if nothing matched
        if (itemsProcessed === 0) {
            const activeBtn = document.querySelector('.filter-btn.active');
            const label = activeBtn ? activeBtn.textContent : filter;
            showEmpty(label);
        }
    }

    // Update active filter button styles
    function setActiveFilter(btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    // Initial render
    window.addEventListener('load', () => {
        // Determine if we are on index.html (limit to 4)
        const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
        renderPortfolio('all', isHomePage ? 4 : null);
    });

    // Listen for filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            setActiveFilter(this);
            const filter = this.getAttribute('data-filter');
            renderPortfolio(filter);
        });
    });

    // Expose to window for manual calls
    window.renderPortfolio = renderPortfolio;
})();
