import { initTheme } from './theme.js';
import { createProfileSection } from './components/profileSection.js';
import { createProjectsSection } from './components/projectsSection.js';
import { createSkillsSection } from './components/skillsSection.js';
import { initContactForm } from './contact.js';
import { initAdminPanel } from './admin/adminPanel.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    createProfileSection();
    createProjectsSection();
    createSkillsSection();
    initContactForm();
    initAdminPanel();
    initAnimations();
});