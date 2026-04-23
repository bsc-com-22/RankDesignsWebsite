const fs = require('fs');
const path = require('path');

const services = [
    {
        id: "graphic-design",
        title: "Graphic Design & Branding",
        desc: "Identity systems, logos, and visual languages that make brands unforgettable. A full detailed explanation of our graphic design and branding service. We dive deep into your company's core values to produce an identity that resonates with your target audience and distinguishes you in the market.",
        offerings: [
            "Logo Design",
            "Brand Identity Creation",
            "Packaging Design",
            "Company Profiles",
            "Event Branding"
        ],
        portfolio: [
            { title: "Northwind Identity", desc: "Complete brand overhaul and stationary.", img: "linear-gradient(135deg,hsl(215,58%,22%),hsl(215,40%,35%))", tag: "Branding" },
            { title: "Echo Packaging", desc: "Product packaging and labels.", img: "linear-gradient(135deg,hsl(280,40%,30%),hsl(280,50%,20%))", tag: "Design" },
            { title: "Summit Profile", desc: "Corporate profile design.", img: "linear-gradient(135deg,hsl(10,50%,30%),hsl(10,60%,40%))", tag: "Company Profile" }
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
            { title: "Helix Analytics", desc: "Custom web dashboard and API.", img: "linear-gradient(135deg,hsl(215,60%,15%),hsl(108,60%,25%))", tag: "Web Dev" },
            { title: "CloudSync App", desc: "Mobile application development.", img: "linear-gradient(135deg,hsl(200,60%,20%),hsl(200,70%,30%))", tag: "App Dev" }
        ]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        desc: "Performance campaigns, SEO, and social strategies that turn reach into revenue. We leverage data-driven insights and creative storytelling to maximize your online presence and engage with your ideal customers.",
        offerings: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Pay-Per-Click (PPC) Advertising",
            "Email Marketing",
            "Content Strategy"
        ],
        portfolio: [
            { title: "Cadence Campaign", desc: "Multi-channel marketing strategy.", img: "linear-gradient(135deg,hsl(108,80%,20%),hsl(150,60%,30%))", tag: "Marketing" },
            { title: "Velocity SEO", desc: "Search engine optimization for retail.", img: "linear-gradient(135deg,hsl(40,80%,30%),hsl(45,80%,40%))", tag: "SEO" }
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
            { title: "Atlas Editorial", desc: "Brand storytelling and media plan.", img: "linear-gradient(135deg,hsl(260,40%,25%),hsl(215,58%,30%))", tag: "Editorial" },
            { title: "Prism PR", desc: "Public relations campaign execution.", img: "linear-gradient(135deg,hsl(330,50%,30%),hsl(330,60%,20%))", tag: "PR" }
        ]
    },
    {
        id: "commercial-printing",
        title: "Commercial Printing",
        desc: "Premium print production — brochures, packaging, signage, and more. From high-quality brochures to large format banners, we provide comprehensive printing services that bring your designs to life tangibly.",
        offerings: [
            "Brochures & Flyers",
            "Business Cards",
            "Large Format Printing",
            "Signage",
            "Promotional Items"
        ],
        portfolio: [
            { title: "Nova Signage", desc: "Large format outdoor signage.", img: "linear-gradient(135deg,hsl(180,40%,20%),hsl(180,50%,30%))", tag: "Signage" },
            { title: "Vertex Brochures", desc: "Premium corporate brochures.", img: "linear-gradient(135deg,hsl(0,50%,30%),hsl(0,60%,40%))", tag: "Printing" }
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
