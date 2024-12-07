import { projects } from '../data/projects.js';

export function createProjectsSection() {
    const projectGrid = document.getElementById('projectGrid');
    
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectGrid.appendChild(card);
    });

    initializeProjectAnimations();
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p>${project.description}</p>
            <div class="skill-tags">
                ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" class="btn primary" target="_blank" rel="noopener">View on GitHub</a>
            </div>
        </div>
    `;
    
    return card;
}

function initializeProjectAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}