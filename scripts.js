document.addEventListener("DOMContentLoaded", () => {
    // Dynamically generate navigation items
    const navItems = ["Home", "About", "Projects", "Contact"];
    const navList = document.getElementById('nav-list');

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${item}</a>`;
        navList.appendChild(li);
    });

    // Load additional content dynamically
    const loadButton = document.getElementById('load-content');
    const dynamicContent = document.getElementById('dynamic-content');

    loadButton.addEventListener('click', () => {
        // Simulate fetching content
        setTimeout(() => {
            const newContent = document.createElement('div');
            newContent.innerHTML = `
                <h3>Dynamic Section</h3>
                <p>This content was loaded dynamically.</p>
            `;
            dynamicContent.appendChild(newContent);
        }, 1000);
    });
});
