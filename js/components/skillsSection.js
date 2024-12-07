import { skills } from '../data/skills.js';

export function createSkillsSection() {
    const skillTags = document.getElementById('skillTags');
    
    skills.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);
        
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'skill-tags';
        
        category.items.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            tagsDiv.appendChild(tag);
        });
        
        categoryDiv.appendChild(tagsDiv);
        skillTags.appendChild(categoryDiv);
    });
}