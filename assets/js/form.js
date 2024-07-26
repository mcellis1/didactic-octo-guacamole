const usernameInput = document.querySelector('#username-field');
const titleInput = document.querySelector('#title-field');
const contentInput = document.querySelector('#content-field');
const submitButton = document.querySelector('#submit-button');
const errorAlert = document.querySelector('#error-alert');

function storeBlog(posts) {
    localStorage.setItem('posts', JSON.stringify(posts))
}

function clearFields() {
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
};

function goToBlog() {
    location.href = 'blog.html';
};

submitButton.addEventListener('click', function () {
    errorAlert.textContent = '';

    const username = usernameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!username || !title || !content) {
        errorAlert.textContent = 'Please do not leave any fields blank';
        return;
    }

    const post = {
        username,
        title,
        content
    }
    const jsonString = localStorage.getItem('posts');
    const posts = JSON.parse(jsonString) || [];
    posts.push(post);

    storeBlog(posts);
    clearFields();
    goToBlog();
});
