class ContentManager {
    constructor() {
        this.content = this.loadContent();
    }

    loadContent() {
        const savedContent = localStorage.getItem('website_content');
        return savedContent ? JSON.parse(savedContent) : {
            hero: {
                title: "Hello, I'm Samriddha Upreti",
                subtitle: "Software Developer & Tech Enthusiast"
            },
            about: {
                description: "I'm a passionate software developer based in Nepal. I specialize in creating modern web applications and have a keen interest in emerging technologies. My goal is to build innovative solutions that make a positive impact."
            },
            contact: {
                title: "Get In Touch"
            },
            footer: {
                copyright: "© 2024 Samriddha Upreti. All rights reserved."
            }
        };
    }

    updateContent(section, key, value) {
        if (!this.content[section]) {
            this.content[section] = {};
        }
        this.content[section][key] = value;
        localStorage.setItem('website_content', JSON.stringify(this.content));
        this.updateDOM(section, key, value);
    }

    updateDOM(section, key, value) {
        const elements = {
            hero: {
                title: document.querySelector('.hero h1'),
                subtitle: document.querySelector('.subtitle')
            },
            about: {
                description: document.querySelector('.about-text p')
            },
            contact: {
                title: document.querySelector('.contact h2')
            },
            footer: {
                copyright: document.querySelector('footer p')
            }
        };

        if (elements[section] && elements[section][key]) {
            elements[section][key].textContent = value;
        }
    }

    getContent() {
        return this.content;
    }
}

export const contentManager = new ContentManager();