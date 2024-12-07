(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();function C(){const e=document.getElementById("themeToggle");window.matchMedia("(prefers-color-scheme: dark)").matches&&(document.documentElement.setAttribute("data-theme","dark"),e.textContent="☀️"),e.addEventListener("click",()=>{const i=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),e.textContent=i==="dark"?"☀️":"🌙"})}const l={name:"Samriddha Upreti",title:"Software Developer",location:"Nepal",github:"https://github.com/Samriddha-Upreti",facebook:"https://www.facebook.com/SamriddhaUpreti612",description:"Passionate software developer with a focus on web development and problem-solving. Currently exploring new technologies and building innovative solutions.",education:"Bachelor's in Computer Science",interests:["Web Development","Software Engineering","Open Source"]};function k(){w(),I(),L()}function w(){const e=document.querySelector(".hero h1"),t=document.querySelector(".hero .subtitle");e.innerHTML=`Hello, I'm <span class="highlight">${l.name}</span>`,t.textContent=l.title}function I(){const e=document.querySelector(".about-text p");e.textContent=l.description}function L(){const e=document.querySelector(".social-links");e.innerHTML=`
        <a href="${l.github}" target="_blank" rel="noopener">GitHub</a>
        <a href="${l.facebook}" target="_blank" rel="noopener">Facebook</a>
    `}const x=[{title:"Portfolio Website",description:"A modern, responsive portfolio website built with vanilla JavaScript and Vite.",technologies:["HTML5","CSS3","JavaScript","Vite"],image:"https://via.placeholder.com/300x200",github:"https://github.com/Samriddha-Upreti"},{title:"Task Management System",description:"A full-stack task management application with user authentication and real-time updates.",technologies:["React","Node.js","MongoDB","Express"],image:"https://via.placeholder.com/300x200",github:"https://github.com/Samriddha-Upreti"}];function A(){const e=document.getElementById("projectGrid");x.forEach(t=>{const o=T(t);e.appendChild(o)}),B()}function T(e){const t=document.createElement("div");return t.className="project-card",t.innerHTML=`
        <img src="${e.image}" alt="${e.title}" loading="lazy">
        <div class="project-info">
            <h3 class="project-title">${e.title}</h3>
            <p>${e.description}</p>
            <div class="skill-tags">
                ${e.technologies.map(o=>`<span class="skill-tag">${o}</span>`).join("")}
            </div>
            <div class="project-links">
                <a href="${e.github}" class="btn primary" target="_blank" rel="noopener">View on GitHub</a>
            </div>
        </div>
    `,t}function B(){const e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".project-card").forEach(t=>{e.observe(t)})}const D=[{category:"Programming Languages",items:["JavaScript","Python","Java","C++"]},{category:"Web Technologies",items:["HTML5","CSS3","React.js","Node.js","Express.js"]},{category:"Databases",items:["MongoDB","MySQL","PostgreSQL"]},{category:"Tools & Platforms",items:["Git","GitHub","VS Code","Docker"]}];function P(){const e=document.getElementById("skillTags");D.forEach(t=>{const o=document.createElement("div");o.className="skill-category";const i=document.createElement("h4");i.textContent=t.category,o.appendChild(i);const n=document.createElement("div");n.className="skill-tags",t.items.forEach(r=>{const a=document.createElement("span");a.className="skill-tag",a.textContent=r,n.appendChild(a)}),o.appendChild(n),e.appendChild(o)})}function M(){const e=document.getElementById("contactForm");e.addEventListener("submit",t=>{t.preventDefault();const o={name:document.getElementById("name").value,email:document.getElementById("email").value,message:document.getElementById("message").value};console.log("Form submitted:",o),alert("Thank you for your message! I will get back to you soon."),e.reset()})}/*! js-cookie v3.0.5 | MIT */function d(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)e[i]=o[i]}return e}var O={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function m(e,t){function o(n,r,a){if(!(typeof document>"u")){a=d({},t,a),typeof a.expires=="number"&&(a.expires=new Date(Date.now()+a.expires*864e5)),a.expires&&(a.expires=a.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var s in a)a[s]&&(c+="; "+s,a[s]!==!0&&(c+="="+a[s].split(";")[0]));return document.cookie=n+"="+e.write(r,n)+c}}function i(n){if(!(typeof document>"u"||arguments.length&&!n)){for(var r=document.cookie?document.cookie.split("; "):[],a={},c=0;c<r.length;c++){var s=r[c].split("="),E=s.slice(1).join("=");try{var u=decodeURIComponent(s[0]);if(a[u]=e.read(E,u),n===u)break}catch{}}return n?a[n]:a}}return Object.create({set:o,get:i,remove:function(n,r){o(n,"",d({},r,{expires:-1}))},withAttributes:function(n){return m(this.converter,d({},this.attributes,n))},withConverter:function(n){return m(d({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var p=m(O,{path:"/"});const H="admin",j="admin123",g="admin_auth";function f(){return p.get(g)==="true"}function q(e,t){return e===H&&t===j?(p.set(g,"true",{expires:1}),!0):!1}function U(){p.remove(g)}class N{constructor(){this.content=this.loadContent()}loadContent(){const t=localStorage.getItem("website_content");return t?JSON.parse(t):{hero:{title:"Hello, I'm Samriddha Upreti",subtitle:"Software Developer & Tech Enthusiast"},about:{description:"I'm a passionate software developer based in Nepal. I specialize in creating modern web applications and have a keen interest in emerging technologies. My goal is to build innovative solutions that make a positive impact."},contact:{title:"Get In Touch"},footer:{copyright:"© 2024 Samriddha Upreti. All rights reserved."}}}updateContent(t,o,i){this.content[t]||(this.content[t]={}),this.content[t][o]=i,localStorage.setItem("website_content",JSON.stringify(this.content)),this.updateDOM(t,o,i)}updateDOM(t,o,i){const n={hero:{title:document.querySelector(".hero h1"),subtitle:document.querySelector(".subtitle")},about:{description:document.querySelector(".about-text p")},contact:{title:document.querySelector(".contact h2")},footer:{copyright:document.querySelector("footer p")}};n[t]&&n[t][o]&&(n[t][o].textContent=i)}getContent(){return this.content}}const v=new N;function $(){F(),R(),S()}function F(){const e=document.createElement("button");e.id="adminButton",e.className="admin-button",e.textContent="⚙️",document.body.appendChild(e)}function R(){const e=document.createElement("div");e.id="adminPanel",e.className="admin-panel",e.innerHTML=f()?y():b(),document.body.appendChild(e)}function b(){return`
        <div class="admin-login">
            <h2>Admin Login</h2>
            <form id="adminLoginForm">
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
        </div>
    `}function y(){const e=v.getContent();return`
        <div class="admin-content">
            <h2>Admin Panel</h2>
            <button id="logoutButton">Logout</button>
            
            <div class="content-section">
                <h3>Hero Section</h3>
                <div class="input-group">
                    <label>Title</label>
                    <input type="text" data-section="hero" data-key="title" value="${e.hero.title}">
                </div>
                <div class="input-group">
                    <label>Subtitle</label>
                    <input type="text" data-section="hero" data-key="subtitle" value="${e.hero.subtitle}">
                </div>
            </div>

            <div class="content-section">
                <h3>About Section</h3>
                <div class="input-group">
                    <label>Description</label>
                    <textarea data-section="about" data-key="description">${e.about.description}</textarea>
                </div>
            </div>

            <div class="content-section">
                <h3>Contact Section</h3>
                <div class="input-group">
                    <label>Title</label>
                    <input type="text" data-section="contact" data-key="title" value="${e.contact.title}">
                </div>
            </div>

            <div class="content-section">
                <h3>Footer</h3>
                <div class="input-group">
                    <label>Copyright</label>
                    <input type="text" data-section="footer" data-key="copyright" value="${e.footer.copyright}">
                </div>
            </div>
        </div>
    `}function S(){const e=document.getElementById("adminButton"),t=document.getElementById("adminPanel");e.addEventListener("click",()=>{t.classList.toggle("active")}),f()?h():document.getElementById("adminLoginForm").addEventListener("submit",i=>{i.preventDefault();const n=document.getElementById("username").value,r=document.getElementById("password").value;q(n,r)?(t.innerHTML=y(),h()):alert("Invalid credentials")})}function h(){const e=document.getElementById("adminPanel");document.getElementById("logoutButton").addEventListener("click",()=>{U(),e.innerHTML=b(),S()}),e.querySelectorAll("input, textarea").forEach(i=>{i.addEventListener("change",n=>{const r=n.target.dataset.section,a=n.target.dataset.key;v.updateContent(r,a,n.target.value)})})}function _(){G(),J(),z()}function G(){const e=document.createElement("div");e.className="scroll-progress",document.body.appendChild(e),window.addEventListener("scroll",()=>{const t=document.body.scrollTop||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=t/o*100;e.style.width=i+"%"})}function J(){document.querySelectorAll(".skill-tag").forEach((t,o)=>{t.style.setProperty("--i",o+1)})}function z(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),i.target.classList.contains("skill-category")&&i.target.querySelectorAll(".skill-tag").forEach((n,r)=>{n.style.animationDelay=`${r*.1}s`}))})},e);document.querySelectorAll(".project-card, .skill-category, .about-content").forEach(o=>{t.observe(o)})}document.addEventListener("DOMContentLoaded",()=>{C(),k(),A(),P(),M(),$(),_()});
