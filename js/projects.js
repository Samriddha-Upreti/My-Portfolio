const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform built with MERN stack, featuring user authentication, product management, and secure payments.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        image: "https://via.placeholder.com/300x200",
        link: "#"
    },
    {
        title: "Task Management System",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        technologies: ["JavaScript", "React", "Firebase", "Material-UI"],
        image: "https://via.placeholder.com/300x200",
        link: "#"
    },
    {
        title: "Portfolio Website",
        description: "A responsive personal portfolio website showcasing projects and skills, built with modern web technologies.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Vite"],
        image: "https://via.placeholder.com/300x200",
        link: "#"
    }
];

export function initProjects() {
    const projectGrid = document.getElementById('projectGrid');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });

    // Initialize intersection observer for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover;">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p>${project.description}</p>
            <div class="skill-tags">
                ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary" style="margin-top: 1rem;">View Project</a>
        </div>
    `;
    
    return card;
}