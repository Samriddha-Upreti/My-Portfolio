import { isAuthenticated, login, logout } from './auth.js';
import { contentManager } from './contentManager.js';

export function initAdminPanel() {
    createAdminButton();
    createAdminPanel();
    initAdminEvents();
}

function createAdminButton() {
    const button = document.createElement('button');
    button.id = 'adminButton';
    button.className = 'admin-button';
    button.textContent = '⚙️';
    document.body.appendChild(button);
}

function createAdminPanel() {
    const panel = document.createElement('div');
    panel.id = 'adminPanel';
    panel.className = 'admin-panel';
    
    panel.innerHTML = isAuthenticated() ? createAdminContent() : createLoginForm();
    document.body.appendChild(panel);
}

function createLoginForm() {
    return `
        <div class="admin-login">
            <h2>Admin Login</h2>
            <form id="adminLoginForm">
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
        </div>
    `;
}

function createAdminContent() {
    const content = contentManager.getContent();
    return `
        <div class="admin-content">
            <h2>Admin Panel</h2>
            <button id="logoutButton">Logout</button>
            
            <div class="content-section">
                <h3>Hero Section</h3>
                <div class="input-group">
                    <label>Title</label>
                    <input type="text" data-section="hero" data-key="title" value="${content.hero.title}">
                </div>
                <div class="input-group">
                    <label>Subtitle</label>
                    <input type="text" data-section="hero" data-key="subtitle" value="${content.hero.subtitle}">
                </div>
            </div>

            <div class="content-section">
                <h3>About Section</h3>
                <div class="input-group">
                    <label>Description</label>
                    <textarea data-section="about" data-key="description">${content.about.description}</textarea>
                </div>
            </div>

            <div class="content-section">
                <h3>Contact Section</h3>
                <div class="input-group">
                    <label>Title</label>
                    <input type="text" data-section="contact" data-key="title" value="${content.contact.title}">
                </div>
            </div>

            <div class="content-section">
                <h3>Footer</h3>
                <div class="input-group">
                    <label>Copyright</label>
                    <input type="text" data-section="footer" data-key="copyright" value="${content.footer.copyright}">
                </div>
            </div>
        </div>
    `;
}

function initAdminEvents() {
    const adminButton = document.getElementById('adminButton');
    const adminPanel = document.getElementById('adminPanel');

    adminButton.addEventListener('click', () => {
        adminPanel.classList.toggle('active');
    });

    if (!isAuthenticated()) {
        const loginForm = document.getElementById('adminLoginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (login(username, password)) {
                adminPanel.innerHTML = createAdminContent();
                initContentEvents();
            } else {
                alert('Invalid credentials');
            }
        });
    } else {
        initContentEvents();
    }
}

function initContentEvents() {
    const adminPanel = document.getElementById('adminPanel');
    
    // Handle logout
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
        logout();
        adminPanel.innerHTML = createLoginForm();
        initAdminEvents();
    });

    // Handle content updates
    const inputs = adminPanel.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const section = e.target.dataset.section;
            const key = e.target.dataset.key;
            contentManager.updateContent(section, key, e.target.value);
        });
    });
}