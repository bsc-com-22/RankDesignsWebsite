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

window.portfolioData = portfolioData;
