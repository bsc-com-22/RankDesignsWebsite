const fs = require('fs');

let portfolioContent = fs.readFileSync('portfolio.html', 'utf8');

const newGridHtml = `<!-- Filter Bar -->
            <div class="portfolio-filter animate-fade-in-slow">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="branding">Graphic Design & Branding</button>
                <button class="filter-btn" data-filter="live-streaming">Live Streaming</button>
                <button class="filter-btn" data-filter="marketing">Digital Marketing</button>
                <button class="filter-btn" data-filter="ict">ICT Solutions</button>
            </div>

            <div class="portfolio-grid">
                <article class="portfolio-item reveal col-7" data-category="branding" data-id="nche" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(215,58%,22%),hsl(215,40%,35%))">
                        <div class="portfolio-placeholder"><span>Branding</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <div class="portfolio-tag-hover">Graphic Design & Branding</div>
                        <h3>National Council for Higher Education (NCHE)</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>Branding</div>
                </article>
                <article class="portfolio-item reveal col-5" data-category="branding" data-id="fnb" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(108,60%,25%),hsl(150,60%,30%))">
                        <div class="portfolio-placeholder"><span>Branding</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <div class="portfolio-tag-hover">Graphic Design & Branding</div>
                        <h3>F&N Business Consultants</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>Branding</div>
                </article>
                <article class="portfolio-item reveal col-5" data-category="ict" data-id="ach_ict" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(220,60%,35%),hsl(220,80%,15%))">
                        <div class="portfolio-placeholder"><span>ICT Solutions</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <div class="portfolio-tag-hover">ICT Solutions</div>
                        <h3>ACH Limited Website</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>ICT Solutions</div>
                </article>
                <article class="portfolio-item reveal col-7" data-category="live-streaming" data-id="sim" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(210,60%,35%),hsl(210,80%,20%))">
                        <div class="portfolio-placeholder"><span>Live Streaming</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <div class="portfolio-tag-hover">Live Streaming Services</div>
                        <h3>Surveyors Institute of Malawi</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>Live Streaming</div>
                </article>
                <article class="portfolio-item reveal col-7" data-category="marketing" data-id="pinnacle" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(120,60%,35%),hsl(120,80%,15%))">
                        <div class="portfolio-placeholder"><span>Digital Marketing</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <div class="portfolio-tag-hover">Digital Marketing</div>
                        <h3>Pinnacle Financial Services</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>Digital Marketing</div>
                </article>
                <article class="portfolio-item reveal col-5" data-category="ict" data-id="outple" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(280,60%,35%),hsl(280,80%,15%))">
                        <div class="portfolio-placeholder"><span>ICT Solutions</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <div class="portfolio-tag-hover">ICT Solutions</div>
                        <h3>Outple</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>ICT Solutions</div>
                </article>
            </div>
            
            <div class="photography-section reveal" style="margin-top: 5rem; padding: 3rem; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 12px;">
                <h3 class="text-display" style="font-size: 2rem; margin-bottom: 1.5rem;">Photography & Videography Services</h3>
                <p class="section-body">We provided professional photography and videography services for various events and brand projects, capturing high-quality visuals tailored for marketing, communication, and storytelling purposes.</p>
            </div>`;

portfolioContent = portfolioContent.replace(/<!-- Filter Bar -->[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, newGridHtml + '\n        </div>\n    </section>');

fs.writeFileSync('portfolio.html', portfolioContent, 'utf8');

let indexContent = fs.readFileSync('index.html', 'utf8');
const indexGridHtml = `<div class="portfolio-grid">
                <article class="portfolio-item reveal col-7" data-id="nche" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(215,58%,22%),hsl(215,40%,35%))">
                        <div class="portfolio-placeholder"><span>Branding</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <h3>National Council for Higher Education</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>Branding</div>
                </article>
                <article class="portfolio-item reveal col-5" data-id="ach_ict" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(220,60%,35%),hsl(220,80%,15%))">
                        <div class="portfolio-placeholder"><span>ICT Solutions</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <h3>ACH Limited</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>ICT Solutions</div>
                </article>
                <article class="portfolio-item reveal col-5" data-id="pinnacle" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(120,60%,35%),hsl(120,80%,15%))">
                        <div class="portfolio-placeholder"><span>Marketing</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <h3>Pinnacle Financial Services</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>Marketing</div>
                </article>
                <article class="portfolio-item reveal col-7" data-id="sim" style="cursor: pointer;">
                    <div class="portfolio-img" style="background: linear-gradient(135deg,hsl(210,60%,35%),hsl(210,80%,20%))">
                        <div class="portfolio-placeholder"><span>Live Streaming</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info">
                        <h3>Surveyors Institute of Malawi</h3>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>Live Streaming</div>
                </article>
            </div>`;

indexContent = indexContent.replace(/<div class="portfolio-grid">[\s\S]*?<\/div>[\s]*<\/div>[\s]*<\/section>/, indexGridHtml + '\n    </div>\n  </section>');
fs.writeFileSync('index.html', indexContent, 'utf8');

console.log("Updated portfolio grids.");
