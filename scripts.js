document.addEventListener("DOMContentLoaded", () => {
    // Dynamically generate navigation items
    const navItems = ["首页", "关于我们", "项目", "联系我们"];
    const navList = document.getElementById('nav-list');

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${item}</a>`;
        navList.appendChild(li);
    });

    // Load additional content dynamically
    const loadButton = document.getElementById('load-content');
    const dynamicContent = document.getElementById('dynamic-content');

    loadButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            const newContent = document.createElement('div');
            newContent.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
            dynamicContent.appendChild(newContent);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
