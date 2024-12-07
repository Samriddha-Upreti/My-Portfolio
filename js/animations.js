export function initAnimations() {
    initScrollProgress();
    initSkillTagAnimations();
    initIntersectionAnimations();
}

function initScrollProgress() {
    // Create scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update progress bar width on scroll
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

function initSkillTagAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.setProperty('--i', index + 1);
    });
}

function initIntersectionAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('skill-category')) {
                    entry.target.querySelectorAll('.skill-tag').forEach((tag, index) => {
                        tag.style.animationDelay = `${index * 0.1}s`;
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.project-card, .skill-category, .about-content').forEach(el => {
        observer.observe(el);
    });
}