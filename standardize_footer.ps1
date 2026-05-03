$newFooter = @"
    <footer class="site-footer">
        <div class="container-tight footer-body">
            <div class="footer-grid">
                <!-- Left: Brand -->
                <div class="footer-brand">
                    <a href="index.html" class="logo logo-light" aria-label="Rank Designs home">
                        <img src="assets/images/LogoonBlackDarkBackgrounds.png" alt="Rank Designs Logo" height="80px">
                    </a>
                    <div class="footer-legal-info">
                        <p>A multidisciplinary creative agency helping brands grow through strategy, design, and technology.</p>
                        <p>Blantyre, Malawi</p>
                    </div>
                </div>

                <!-- Col 1: CONTACT -->
                <div class="footer-col section-contact">
                    <h4 class="footer-col-title">CONTACT</h4>
                    <div class="footer-contact-details">
                        <p>Phone: +265 881 060 045</p>
                        <p>Email: <a href="mailto:info@rankdesigns.art">info@rankdesigns.art</a></p>
                        <p>Location: Blantyre, Malawi, P.O Box 413</p>
                    </div>
                    <div class="footer-socials">
                        <a href="#" class="social-icon-circle" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                        <a href="#" class="social-icon-circle" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </a>
                        <a href="#" class="social-icon-circle" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a href="#" class="social-icon-circle" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Col 2: ABOUT -->
                <div class="footer-col">
                    <h4 class="footer-col-title">ABOUT</h4>
                    <ul>
                        <li><a href="about.html">Our work</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Col 3: INFORMATION -->
                <div class="footer-col">
                    <h4 class="footer-col-title">INFORMATION</h4>
                    <ul>
                        <li><a href="creative-design-branding.html">Design & Branding</a></li>
                        <li><a href="ict-solutions.html">ICT Solutions</a></li>
                        <li><a href="content-digital-marketing.html">Marketing</a></li>
                        <li><a href="media-consultancy.html">Media</a></li>
                        <li><a href="creative-production.html">Creative Production</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-bottom-left">
                    <span>© <span id="footer-year"></span> Rank Designs. All rights reserved.</span>
                </div>
                <div class="footer-bottom-right">
                    <span>Creativity that <span style="color: var(--accent)">Drives Results</span></span>
                </div>
            </div>
        </div>
    </footer>
"@

$files = Get-ChildItem -Path "." -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    $pattern = '(?s)<footer\b[^>]*>.*?</footer>'
    
    if ($content -match $pattern) {
        $content = $content -replace $pattern, $newFooter
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated Footer: $($file.Name)"
    }
    else {
        Write-Host "No footer found in $($file.Name)"
    }
}

Write-Host "All footers updated successfully!"
