import { profile } from '../data/profile.js';

export function createProfileSection() {
    updateHeroSection();
    updateAboutSection();
    updateSocialLinks();
}

function updateHeroSection() {
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero .subtitle');
    
    heroTitle.innerHTML = `Hello, I'm <span class="highlight">${profile.name}</span>`;
    heroSubtitle.textContent = profile.title;
}

function updateAboutSection() {
    const aboutText = document.querySelector('.about-text p');
    aboutText.textContent = profile.description;
}

function updateSocialLinks() {
    const socialLinks = document.querySelector('.social-links');
    socialLinks.innerHTML = `
        <a href="${profile.github}" target="_blank" rel="noopener">GitHub</a>
        <a href="${profile.facebook}" target="_blank" rel="noopener">Facebook</a>
    `;
}