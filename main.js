// ===== Mobile Menu =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileClose = document.getElementById('mobileClose');
    
    function openMobileMenu() {
        mobileNav.classList.add('open');
        mobileOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mobileNav.classList.remove('open');
        mobileOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    menuToggle.addEventListener('click', openMobileMenu);
    mobileClose.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMobileMenu();
    });
    
    // ===== Stats Counter Animation =====
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * target);
            el.textContent = current + (target >= 100 ? '+' : '');
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    };
    
    // Intersection Observer for stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                animateCounter(el);
                statsObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(el => statsObserver.observe(el));
    
    // ===== Year in Footer =====
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // ===== Smooth Scroll for internal links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });
});
