const usernameInput = document.querySelector('#username-field');
const titleInput = document.querySelector('#title-field');
const contentInput = document.querySelector('#content-field');
const submitButton = document.querySelector('#submit-button');

function clearFields() {
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
};

function goToBlog () {
    location.href = 'blog.html';
};

submitButton.addEventListener('click', function () {
    const usernameValue = usernameInput.value;
    const titleValue = titleInput.value;
    const contentValue = contentInput.value;

    localStorage.setItem('username', usernameValue);
    localStorage.setItem('title', titleValue);
    localStorage.setItem('content', contentValue);

    clearFields();
    goToBlog ();
});

let localUsername = localStorage.getItem('username');
let localTitle = localStorage.getItem('title');
let localContent = localStorage.getItem('content');

console.log(`${localUsername}`);
console.log(`${localTitle}`);
console.log(`${localContent}`);