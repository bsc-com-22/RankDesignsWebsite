(function () {
    'use strict';

    /* ---------- Header scroll + logo swap ---------- */
    var header = document.getElementById('site-header');
    var logoLight = document.getElementById('logo-light'); // white logo (for dark/hero bg)
    var logoDark = document.getElementById('logo-dark');  // dark logo  (for white bg)

    function onScroll() {
        if (window.scrollY > 12) {
            header.classList.add('scrolled');
            if (logoLight) logoLight.style.display = 'none';
            if (logoDark) logoDark.style.display = 'block';
        } else {
            header.classList.remove('scrolled');
            if (logoLight) logoLight.style.display = 'block';
            if (logoDark) logoDark.style.display = 'none';
        }
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- Mobile menu ---------- */
    var menuToggle = document.getElementById('menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
    var iconMenu = document.getElementById('icon-menu');
    var iconClose = document.getElementById('icon-close');
    var mobileOpen = false;

    function setMenuOpen(open) {
        mobileOpen = open;
        if (open) {
            mobileMenu.classList.add('open');
            iconMenu.style.display = 'none';
            iconClose.style.display = 'block';
        } else {
            mobileMenu.classList.remove('open');
            iconMenu.style.display = 'block';
            iconClose.style.display = 'none';
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            setMenuOpen(!mobileOpen);
        });
    }

    document.querySelectorAll('.mobile-link, .mobile-cta').forEach(function (link) {
        link.addEventListener('click', function () { setMenuOpen(false); });
    });

    /* ---------- Scroll reveal ---------- */
    var revealEls = document.querySelectorAll('.reveal');

    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var delay = parseInt(el.style.getPropertyValue('--delay')) || 0;
                setTimeout(function () { el.classList.add('in-view'); }, delay);
                revealObserver.unobserve(el);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });

    /* ---------- Contact form + toast ---------- */
    var form = document.getElementById('contact-form');
    var submitBtn = document.getElementById('submit-btn');
    var toast = document.getElementById('toast');

    function showToast() {
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 4000);
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending…';
            setTimeout(function () {
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send message';
                showToast();
            }, 700);
        });
    }

    /* ---------- Footer year ---------- */
    var yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = '© ' + new Date().getFullYear() + ' Rank Designs. All rights reserved.';
    }

})();
