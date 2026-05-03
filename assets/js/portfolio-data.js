/**
 * Portfolio Data — Rank Designs
 * Each key is a unique project ID referenced via ?id= in project.html
 * Images use local paths relative to site root.
 */
const portfolioData = {

    /* ───────────────────────────────────────────────
       BRANDING & CREATIVE DESIGN PROJECTS
    ─────────────────────────────────────────────── */

    nche: {
        type: 'simple',
        title: 'NCHE — 2026 University Intake Campaign',
        category: 'Creative Design & Branding',
        bgGradient: 'linear-gradient(135deg,hsl(215,58%,22%),hsl(215,40%,35%))',
        coverImg: 'assets/images/projects/NCHE/NCHE 2026 INTAKE-01.jpg',
        desc: '2025/2026 Harmonised Public Universities Selection Applications campaign for the National Council for Higher Education. We designed all campaign materials including intake posters, radio programme creatives, payment method guides and extended deadline notices.',
        gallery: [
            { type: 'image', url: 'assets/images/projects/NCHE/NCHE 2026 INTAKE-01.jpg' },
            { type: 'image', url: 'assets/images/projects/NCHE/NCHE 2026 INTAK.jpg' },
            { type: 'image', url: 'assets/images/projects/NCHE/NCHE PROGRAM RADIO.jpg' },
            { type: 'image', url: 'assets/images/projects/NCHE/PAYMENT METHOD.jpg' },
            { type: 'image', url: 'assets/images/projects/NCHE/EXTENDED.jpg' }
        ]
    },

    ach_brand: {
        type: 'case_study',
        title: 'ACH Limited — Brand Identity & Style Guide',
        category: 'Creative Design & Branding',
        bgGradient: 'linear-gradient(135deg,hsl(260,40%,25%),hsl(215,58%,30%))',
        coverImg: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-01.jpg',
        overview: 'Complete brand guidelines and communications asset suite for ACH Limited, one of Malawi\'s leading enterprise groups.',
        problem: 'ACH needed a cohesive, professional visual identity to unify their internal and external communications across multiple business units.',
        solution: 'We developed a comprehensive 35-page Brand Brief Guideline covering logo usage, colour palettes, typography, stationery, design templates and social media assets.',
        results: [
            'Delivered 35-page full brand guideline document',
            'Unified brand language across all departments',
            'Designed bespoke social media and print templates',
            'Produced two complete design template sets for ongoing use'
        ],
        gallery: [
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-01.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-02.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-03.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-04.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-05.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-06.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-07.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-08.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-09.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-10.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-11.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/ACH BRAND BRIEF GUIDELINE-02-12.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/DESIGN TEMPLATES.jpg' },
            { type: 'image', url: 'assets/images/projects/ACH RA/DESIGN TEMPLATES2.jpg' }
        ]
    },

    hillstor: {
        type: 'simple',
        title: 'Hillstor Paints — Brand & Marketing Rollout',
        category: 'Creative Design & Branding',
        bgGradient: 'linear-gradient(135deg,hsl(27,90%,50%),hsl(27,90%,30%))',
        coverImg: 'assets/images/projects/HILLSTOR PAINTS/hILLS.jpg.jpeg',
        desc: 'Full brand identity and marketing rollout for Hillstor Paints including product line design, business cards, letterheads, and physical mockups across paint buckets and signage.',
        gallery: [
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/hILLS.jpg.jpeg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/LETTERHED.jpg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/Hillstor Business Card.jpg.jpeg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/SHEEN.jpg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/MATT.jpg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/ROOF & PAVING.jpg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/ELMUSION.jpg.jpeg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/944893_OD15EW1.jpg.jpeg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/944893_OD15EW2.jpg.jpeg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/944893_OD15EW3.jpg.jpeg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/422833070_1ae9795e-e987-4064-8908-489c692b7273.jpg.jpeg' },
            { type: 'image', url: 'assets/images/projects/HILLSTOR PAINTS/d3d74aaa-d8a2-40d3-8ade-r.jpg.jpeg' }
        ]
    },

    fnb: {
        type: 'case_study',
        title: 'F&N Business Consultants — Anniversary Event Branding',
        category: 'Creative Design & Branding',
        bgGradient: 'linear-gradient(135deg,hsl(108,60%,25%),hsl(150,60%,30%))',
        coverImg: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/14 ANNI.jpg',
        overview: '14th Anniversary celebration branding and full event marketing support for F&N Business Consultants Limited.',
        problem: 'F&N needed a complete event identity that communicated 14 years of excellence while projecting executive credibility across print, digital and physical touchpoints.',
        solution: 'We created a cohesive event brand including anniversary posters, roll-up banners, ads, corporate training creatives, and a distinctive logo treatment.',
        results: [
            'Delivered full event identity package on tight timeline',
            'Roll-up banners and print materials for multiple venues',
            'Coordinated branding across Nkhatabay and corporate training events',
            'Client retained for ongoing marketing support'
        ],
        gallery: [
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/14 ANNI.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/BannerMockup001.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/Roll_up_Mockup_OK.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/Roll_up_Mockup_OKQ.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/Roll_up_Mockup_OK_3.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/EVWNT.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/F&N ADS.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/F&N LOGO.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/CORPORATE PERFORMANCE TRAINING 2.jpg' },
            { type: 'image', url: 'assets/images/projects/F&N BUSINESS CONSULTANTS 14TH ANNIVESARY EVENT BRANDING/CUSTOMER SERVICE - NKHATABAY.jpg' }
        ]
    },

    ipmm: {
        type: 'case_study',
        title: 'IPMM — HR Excellence Awards Branding',
        category: 'Creative Design & Branding',
        bgGradient: 'linear-gradient(135deg,hsl(350,60%,35%),hsl(350,40%,20%))',
        coverImg: 'assets/images/projects/IPMM/A.jpg',
        overview: 'Annual Lake Shore Conference & HR Excellence Awards branding for the Institute of People Management Malawi (IPMM).',
        problem: 'IPMM required premium award and speaker graphics that reflected the prestige of their annual HR conference and award ceremony.',
        solution: 'We designed a complete event collateral suite covering speaker profile cards, trophy award graphics for each category, and event promotional materials — including a video reel.',
        results: [
            'Designed 5 unique speaker profile cards',
            'Created 4 trophy award category graphics',
            'Produced full event promotional video',
            'Elevated perceived prestige of the annual HR awards'
        ],
        gallery: [
            { type: 'image', url: 'assets/images/projects/IPMM/A.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/SPEAKER_Mavuto Kapyepye.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/SPEAKER_SARAH RICHSON.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/SPEAKER_Temwani Simwaka.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/SPEAKER_Wise Chigudu.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/SPEAKER_Yangeni Chendela.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/TROPHY AWARDS_Diversity, Equity & Inclusion Champion.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/TROPHY AWARDS_Emerging HR Leader of the Year.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/TROPHY AWARDS_Presidential Recognition Award.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/TROPHY AWARDS_Wellness & Resilience Advocate.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/HR Policy, Research & Thought LeadershipHR AWARDS_.jpg' },
            { type: 'image', url: 'assets/images/projects/IPMM/Wellness & Resilience AdvocateHR AWARDS_.jpg' },
            { type: 'video', url: 'assets/images/projects/IPMM/VIDEO.mp4' }
        ]
    },

    /* ───────────────────────────────────────────────
       CONTENT & DIGITAL MARKETING PROJECTS
    ─────────────────────────────────────────────── */

    pinnacle: {
        type: 'case_study',
        title: 'Pinnacle Financial Services — Global Money Week',
        category: 'Content & Digital Marketing',
        bgGradient: 'linear-gradient(135deg,hsl(50,90%,35%),hsl(40,80%,20%))',
        coverImg: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/GMW 2026 THEME.jpg',
        overview: '2026 Global Money Week (GMW) campaign for Pinnacle Financial Services — a comprehensive awareness and engagement campaign.',
        problem: 'Pinnacle needed to stand out during Global Money Week with creative that educated youth audiences on financial literacy in an engaging way.',
        solution: 'We created a full campaign suite including the GMW theme poster, Money Game campaign creative, Next Level financial challenge graphic, branded tablecloths, and white & yellow brand identity assets.',
        results: [
            'Comprehensive multi-format campaign delivered',
            'Branded physical and digital materials produced',
            'Creative aligned with global GMW 2026 theme',
            'Tablecloth and event collateral for branch activations'
        ],
        gallery: [
            { type: 'image', url: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/GMW 2026 THEME.jpg' },
            { type: 'image', url: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/GMW CAMPAIGN_MONEY GAME.jpg' },
            { type: 'image', url: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/Next Level-01.jpg' },
            { type: 'image', url: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/PINACLE WHITE.jpg' },
            { type: 'image', url: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/PINACLE YELLOW.jpg' },
            { type: 'image', url: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/Tablecloth_Black Pinacle.jpg' },
            { type: 'image', url: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/ABC.jpg' },
            { type: 'image', url: 'assets/images/projects/PINNACLE FINANCIAL SERVICES/Untitled-2.jpg' }
        ]
    },

    /* ───────────────────────────────────────────────
       ICT SOLUTIONS PROJECTS
    ─────────────────────────────────────────────── */

    ach_ict: {
        type: 'case_study',
        title: 'ACH Limited — Website Redesign',
        category: 'ICT Solutions',
        bgGradient: 'linear-gradient(135deg,hsl(220,60%,35%),hsl(220,80%,15%))',
        coverImg: 'assets/images/projects/ACH WEBSITE/ICT _ACH.png',
        overview: 'Complete redesign and development of ACH Limited\'s corporate website — a large enterprise group operating across Malawi.',
        problem: 'ACH\'s previous site lacked the professional gravitas their enterprise operations demanded. Navigation was complex and the design was dated.',
        solution: 'We delivered a fully redesigned, mobile-responsive website with clean architecture, modern UI, improved navigation, and a strong content hierarchy that reflects ACH\'s market position.',
        results: [
            'Full responsive redesign across desktop, tablet and mobile',
            'Improved navigation and information architecture',
            'Modern UI aligned with the ACH Brand Guidelines',
            'Boosted session duration and engagement metrics'
        ],
        gallery: [
            { type: 'image', url: 'assets/images/projects/ACH WEBSITE/ICT _ACH.png' },
            { type: 'image', url: 'assets/images/projects/ACH WEBSITE/ICT2 _ACH.png' },
            { type: 'image', url: 'assets/images/projects/ACH WEBSITE/ICT3 _ACH.png' },
            { type: 'image', url: 'assets/images/projects/ACH WEBSITE/ICT4 _ACH.png' }
        ]
    },

    outple: {
        type: 'case_study',
        title: 'Outple — HR Recruitment Platform',
        category: 'ICT Solutions',
        bgGradient: 'linear-gradient(135deg,hsl(280,60%,35%),hsl(280,80%,15%))',
        coverImg: 'assets/images/projects/Outple/OUTPLE 1.png',
        overview: 'Website and end-to-end recruitment management system development for Outple.',
        problem: 'Outple needed a scalable digital platform to handle high-volume online recruitment, application tracking, and candidate management.',
        solution: 'We built a custom HR web application with a sleek corporate front-end and a secure, scalable recruitment backend capable of handling thousands of concurrent applicants.',
        results: [
            'Streamlined full hiring pipeline digitally',
            'Managed 10,000+ applicants securely',
            'Reduced manual HR workload significantly',
            'Clean, branded frontend matches corporate identity'
        ],
        gallery: [
            { type: 'image', url: 'assets/images/projects/Outple/OUTPLE 1.png' },
            { type: 'image', url: 'assets/images/projects/Outple/OUTPLE 2.png' },
            { type: 'image', url: 'assets/images/projects/Outple/Outple 3.png' }
        ]
    },

    xroads: {
        type: 'case_study',
        title: 'XRoads Health — Appointment Booking System',
        category: 'ICT Solutions',
        bgGradient: 'linear-gradient(135deg,hsl(340,60%,35%),hsl(340,80%,15%))',
        coverImg: 'assets/images/projects/X ROADS HEALTH/ICT 1...X ROADS.png',
        overview: 'Website and automated appointment booking system for XRoads Health, a modern healthcare provider.',
        problem: 'Manual patient booking workflows were slow, error-prone, and creating bottlenecks at reception.',
        solution: 'We deployed a secure, HIPAA-conscious appointment booking engine tightly integrated with a clean, patient-friendly frontend interface.',
        results: [
            'Reduced administrative load by 40%',
            'Patients can book, reschedule and cancel online',
            'Improved patient satisfaction scores',
            'Fully responsive across all devices'
        ],
        gallery: [
            { type: 'image', url: 'assets/images/projects/X ROADS HEALTH/ICT 1...X ROADS.png' },
            { type: 'image', url: 'assets/images/projects/X ROADS HEALTH/ICT 2...X ROADS.png' },
            { type: 'image', url: 'assets/images/projects/X ROADS HEALTH/ICT 3...X ROADS.png' },
            { type: 'image', url: 'assets/images/projects/X ROADS HEALTH/ICT 4...X ROADS.png' }
        ]
    },

    kaymo: {
        type: 'simple',
        title: 'Kaymo Tech — Corporate Website',
        category: 'ICT Solutions',
        bgGradient: 'linear-gradient(135deg,hsl(40,60%,35%),hsl(40,80%,15%))',
        coverImg: 'assets/images/projects/KAYMOTECH/KAYMOTECH.png',
        desc: 'Corporate website development for Kaymo Tech, showcasing their innovative technological solutions and service offerings with a bold, professional digital presence.',
        gallery: [
            { type: 'image', url: 'assets/images/projects/KAYMOTECH/KAYMOTECH.png' },
            { type: 'image', url: 'assets/images/projects/KAYMOTECH/KAYMOTECH 1.png' },
            { type: 'image', url: 'assets/images/projects/KAYMOTECH/KAYMOTECH 2.png' },
            { type: 'image', url: 'assets/images/projects/KAYMOTECH/KAYMOTECH 3.png' },
            { type: 'image', url: 'assets/images/projects/KAYMOTECH/KAYMOTECH 4.png' }
        ]
    },

    /* ───────────────────────────────────────────────
       MEDIA & PHOTOGRAPHY PROJECTS
    ─────────────────────────────────────────────── */

    photography: {
        type: 'simple',
        title: 'Editorial & Event Photography',
        category: 'Media Consultancy',
        bgGradient: 'linear-gradient(135deg,hsl(210,30%,20%),hsl(210,20%,35%))',
        coverImg: 'assets/images/projects/PHOTOGRAPHY/_MG_4698.jpg',
        desc: 'Professional photography portfolio covering corporate events, editorial shoots, and brand photography for a range of clients across Malawi. Shot with precision to capture authentic moments that elevate brand narratives.',
        gallery: [
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_4698.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_4767.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_4778.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_5460.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_5491.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_5577.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_5612.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_7088.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_7181.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_7207_1.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_7353.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_7368.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/_MG_7370.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/IMG_9070.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/IMG_9077.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/IMG_9084.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/IMG_9093.jpg' },
            { type: 'image', url: 'assets/images/projects/PHOTOGRAPHY/IMG_9098.jpg' }
        ]
    }

};

window.portfolioData = portfolioData;
