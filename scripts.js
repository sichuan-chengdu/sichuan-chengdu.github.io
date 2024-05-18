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
            // Fetch data from an API (or use static data for this example)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();

            // Modify the data content as needed
            data.title = "聚众赌博，持械伤人的公务员兰子鉴资料";
            data.body = "兰子鉴，男，绵阳三台县人, 身份证号510722198809100018";

            const newContent = document.createElement('div');
            newContent.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
            dynamicContent.appendChild(newContent);
        } catch (error) {
            console.error('Error fetching data:', error);

            // Provide fallback content in case of an error
            const fallbackContent = document.createElement('div');
            fallbackContent.innerHTML = `
                <h3>内容加载错误</h3>
                <p>无法加载动态内容，请稍后重试。</p>
            `;
            dynamicContent.appendChild(fallbackContent);
        }
    });
});
