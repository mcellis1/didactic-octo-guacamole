const mainArticle = document.querySelector('#main-article');
const backBtn = document.querySelector('#back-btn');

function renderBlogs() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    for (let i = 0; i < posts.length; i++) {
        const title = posts[i].title;
        const content = posts[i].content;
        const username = posts[i].username;

        const section = document.createElement('section')

        const h2 = document.createElement('h2');
        const pTag = document.createElement('p');
        const div = document.createElement('div');
        h2.textContent = title;
        pTag.textContent = content;
        div.textContent = username;

        mainArticle.appendChild(section);
        section.appendChild(h2);
        section.appendChild(pTag);
        section.appendChild(div);
    }
}

backBtn.addEventListener('click', function () {
    location.href = 'index.html';
});

renderBlogs();
