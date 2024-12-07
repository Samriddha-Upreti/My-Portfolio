const skills = [
    "JavaScript",
    "Python",
    "HTML5",
    "CSS3",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Git",
    "Web Development",
    "Problem Solving",
    "Software Development"
];

export function initSkills() {
    const skillTags = document.getElementById('skillTags');
    
    skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        skillTags.appendChild(tag);
    });
}