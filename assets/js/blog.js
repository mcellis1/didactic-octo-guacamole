const mainArticle = document.querySelector('#main-article');

// const title = document.createElement('h2');
// title.value = localTitle;

// mainArticle.appendChild(title);
onBoot();

function renderBlogs() {
    for (let i = 0; i < usernames.length; i++) {
        const title = titles[i];
        const content = contents[i];
        const username = usernames[i];

        const section = document.createElement('section')

        const h2 = document.createElement('h2');
        const pTag = document.createElement('p');
        const div = document.createElement('div');
        h2.textContent = title;
        pTag.textContent = content;
        div.textContent = username;
        // .appendChild(document.createElement('section'))
        // .appendChild(document.createElement('div'));
      
        // div.textContent = username;
        // div.setAttribute('data-index', i);
        // mainArticle.appendChild(fragment);
        mainArticle.appendChild(section);
        section.appendChild(h2);
        section.appendChild(pTag);
        section.appendChild(div);
    }
}

renderBlogs();

console.log(usernames);
console.log(titles);
console.log(contents);