function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Intersection Observer for Reveal Animations
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
});

// Parallax Effect
const initParallax = () => {
    const heroImage = document.querySelector('.hero-image-wrap img');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (heroImage) {
            heroImage.style.transform = `scale(1.1) translateY(${scrolled * 0.15}px)`;
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));

    // Parallax
    initParallax();

    // Theme Toggle Logic
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            toggleSwitch.checked = true;
        }
    }

    const switchTheme = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    toggleSwitch.addEventListener('change', switchTheme, false);
});
