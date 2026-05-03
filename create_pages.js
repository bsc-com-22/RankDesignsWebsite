const fs = require('fs');
const path = require('path');

const services = [
    {
        id: "creative-design-branding",
        title: "Creative Design & Branding",
        desc: "We create strong and memorable brand identities through strategic design and creative concept development. By understanding your brand's values and audience, we develop visual concepts and branding solutions that help you stand out, connect, and leave a lasting impression.",
        offerings: [
            "Brand Identity Development",
            "Event Branding",
            "Visual Language & Style Guides",
            "Concept Development",
            "Social Media Creative Design",
            "Marketing & Promotional Materials",
            "Print & Digital Design"
        ],
        portfolio: [
            { title: "NCHE Intake Campaign", desc: "Full campaign creative rollout.", img: "url('assets/images/projects/NCHE/NCHE 2026 INTAKE-01.jpg') center/cover", tag: "Design" },
            { title: "ACH Brand Identity", desc: "Comprehensive 35-page style guide.", img: "url('assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-01.jpg') center/cover", tag: "Branding" },
            { title: "Hillstor Paints", desc: "Brand identity & product packaging.", img: "url('assets/images/projects/HILLSTOR PAINTS/hILLS.jpg.jpeg') center/cover", tag: "Identity" }
        ]
    },
    {
        id: "ict-solutions",
        title: "ICT Solutions",
        desc: "Web, mobile, and cloud infrastructure built to scale with your ambitions. Our ICT solutions provide robust, scalable, and secure technologies tailored to optimize your business operations and drive digital transformation.",
        offerings: [
            "Website Design",
            "Web Development",
            "App Development",
            "IT Support",
            "Data Security"
        ],
        portfolio: [
            { title: "ACH Limited Website", desc: "Corporate website redesign.", img: "url('assets/images/projects/ACH WEBSITE/ICT _ACH.png') center/cover", tag: "Web Dev" },
            { title: "Outple HR Platform", desc: "Scalable recruitment system.", img: "url('assets/images/projects/Outple/OUTPLE 1.png') center/cover", tag: "System" },
            { title: "XRoads Health", desc: "Booking & Patient Management.", img: "url('assets/images/projects/X ROADS HEALTH/ICT 1...X ROADS.png') center/cover", tag: "App" }
        ]
    },
    {
        id: "content-digital-marketing",
        title: "Content & Digital Marketing",
        desc: "Performance campaigns, SEO, and social strategies that turn reach into revenue. We leverage data-driven insights and creative storytelling to maximize your online presence and engage with your ideal customers.",
        offerings: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Pay-Per-Click (PPC) Advertising",
            "Email Marketing",
            "Content Strategy"
        ],
        portfolio: [
            { title: "Pinnacle Financial", desc: "Global Money Week Campaign.", img: "url('assets/images/projects/PINNACLE FINANCIAL SERVICES/GMW 2026 THEME.jpg') center/cover", tag: "Marketing" },
            { title: "NCHE Social Campaign", desc: "Intake awareness & engagement.", img: "url('assets/images/projects/NCHE/NCHE PROGRAM RADIO.jpg') center/cover", tag: "Social" }
        ]
    },
    {
        id: "media-consultancy",
        title: "Media Consultancy",
        desc: "Editorial direction and content strategy crafted for modern audiences. Our media experts help you navigate the complex media landscape, ensuring your message is heard loud and clear through the right channels.",
        offerings: [
            "Editorial Direction",
            "Content Creation",
            "PR Campaigns",
            "Photography & Videography",
            "Media Planning"
        ],
        portfolio: [
            { title: "Editorial Photography", desc: "High-end brand & event visuals.", img: "url('assets/images/projects/PHOTOGRAPHY/_MG_4698.jpg') center/cover", tag: "Photography" },
            { title: "IPMM Awards Reel", desc: "Event coverage & content creation.", img: "url('assets/images/projects/IPMM/A.jpg') center/cover", tag: "Media" }
        ]
    },
    {
        id: "creative-production",
        title: "Creative Production",
        desc: "We offer top-quality production services for audio, visual, motion graphics and print. We ensure your message is communicated consistently and professionally across every platform your audience uses.",
        offerings: [
            "Commercial Printing",
            "Audio Production",
            "Motion Graphics",
            "Video Editing"
        ],
        portfolio: [
            { title: "F&N Event Banners", desc: "Large scale event print production.", img: "url('assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/Roll_up_Mockup_OK.jpg') center/cover", tag: "Print" },
            { title: "Hillstor Signage", desc: "Outdoor media & production.", img: "url('assets/images/projects/HILLSTOR PAINTS/hILLS.jpg.jpeg') center/cover", tag: "Production" }
        ]
    }
];

const dirPath = "c:\\Users\\Blessings Chidazi\\Downloads\\RankDesignWebsite";
const templatePath = path.join(dirPath, "services.html");

const templateHtml = fs.readFileSync(templatePath, "utf-8");

// Extract header
const headerMatch = templateHtml.match(/(.*?<div id="mobile-menu">.*?<\/header>)/s);
let headerPart = headerMatch ? headerMatch[1] : "";

// Extract CTA to end
const ctaFooterMatch = templateHtml.match(/(<!-- CTA BANNER -->.*)/s);
const ctaFooterPart = ctaFooterMatch ? ctaFooterMatch[1] : "";

const headPatch = `
    <link rel="stylesheet" href="assets/css/portfolio.css">
    <style>
        .service-details-section {
            padding: 6rem 0;
            background: var(--surface);
        }
        .offerings-list {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        @media (min-width: 640px) {
            .offerings-list { grid-template-columns: 1fr 1fr; }
        }
        .offering-item {
            background: var(--card);
            border: 1px solid var(--border);
            padding: 1.5rem;
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            box-shadow: var(--shadow-card);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .offering-item:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-elevated);
        }
        .offering-icon {
            color: var(--accent);
        }
        .portfolio-mini-section {
            padding: 4rem 0 6rem 0;
            background: var(--bg);
        }
        .service-page-hero-title {
            margin-top: 1rem;
            font-size: clamp(2.5rem, 6vw, 4rem);
            color: var(--primary-fg);
            font-weight: 700;
        }
    </style>
</head>
`;

headerPart = headerPart.replace("</head>", headPatch);

services.forEach(service => {
    let pageHeader = headerPart.replace("<title>Rank Designs — Creativity that Drives Results</title>", `<title>${service.title} - Rank Designs</title>`);
    pageHeader = pageHeader.replace('href="services.html"', 'href="services.html" class="active"'); // optional highlight

    const heroHtml = `
    <!-- HERO -->
    <section id="top" class="hero" style="min-height: 40vh;">
        <div class="hero-bg">
            <img src="assets/images/hero.jpeg" alt="" aria-hidden="true" class="hero-bg-img">
            <div class="hero-overlay"></div>
            <div class="hero-radial"></div>
        </div>
        <div class="hero-float-accent" aria-hidden="true"></div>
        <div class="container-tight hero-content" style="padding-top: 8rem; padding-bottom: 4rem;">
            <div class="hero-inner">
                <a href="services.html" style="display:inline-flex; align-items:center; gap:0.5rem; color:var(--accent); font-weight:600; font-size:0.875rem; margin-bottom:1.5rem; text-decoration:none; transition: color 0.3s ease;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--accent)'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Services
                </a>
                <h1 class="service-page-hero-title animate-fade-in-slow">
                    ${service.title}
                </h1>
                <p class="hero-sub animate-fade-in-slow anim-delay-200">
                    Comprehensive creative and strategic solutions.
                </p>
            </div>
        </div>
    </section>
`;

    const offeringsHtml = service.offerings.map((off, index) => `
                    <div class="offering-item reveal" style="--delay:${index * 50}ms">
                        <svg class="offering-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <h4 style="font-weight: 600; font-size: 1.1rem; margin:0;">${off}</h4>
                    </div>`).join("");

    const detailsHtml = `
    <!-- SERVICE DETAILS -->
    <section class="service-details-section">
        <div class="container-tight">
            <div style="max-width: 48rem; margin-bottom: 4rem;" class="reveal">
                <span class="label-tag accent-label">· Overview</span>
                <h2 class="section-title" style="margin-top: 0.5rem;">About this Service</h2>
                <p class="section-body">${service.desc}</p>
            </div>
            <div class="reveal">
                <h3 style="font-size: 1.8rem; color: var(--primary); font-family: 'Goga Test', sans-serif; margin-bottom: 0.5rem;">What We Offer</h3>
                <div class="offerings-list">
                    ${offeringsHtml}
                </div>
            </div>
        </div>
    </section>
`;

    const portfolioCardsHtml = service.portfolio.map((p, index) => `
                <article class="portfolio-item reveal col-6" style="--delay:${index * 100}ms">
                    <div class="portfolio-img" style="background: ${p.img}">
                        <div class="portfolio-placeholder"><span>Image</span></div>
                    </div>
                    <div class="portfolio-overlay"></div>
                    <div class="portfolio-hover-info" style="bottom: 1.5rem; left: 1.5rem; transform: none; opacity: 1;">
                        <h3 style="font-size: 1.25rem;">${p.title}</h3>
                        <p style="color: rgba(255,255,255,0.8); font-size:0.9rem; margin-top:0.25rem;">${p.desc}</p>
                    </div>
                    <div class="portfolio-tag-badge"><span class="tag-dot"></span>${p.tag}</div>
                </article>`).join("");

    const portfolioHtml = `
    <!-- PORTFOLIO -->
    <section class="portfolio-mini-section">
        <div class="container-tight">
            <div class="reveal" style="margin-bottom: 2.5rem;">
                <span class="label-tag accent-label">· Sample Works</span>
                <h2 class="section-title" style="margin-top: 0.5rem; font-size: 2.2rem;">Recent Projects in ${service.title.split(' ')[0]}</h2>
            </div>
            <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                ${portfolioCardsHtml}
            </div>
        </div>
    </section>
`;

    const finalHtml = pageHeader + heroHtml + detailsHtml + portfolioHtml + ctaFooterPart;
    const outPath = path.join(dirPath, `${service.id}.html`);
    fs.writeFileSync(outPath, finalHtml, "utf-8");
    console.log(`Created ${outPath}`);
});
