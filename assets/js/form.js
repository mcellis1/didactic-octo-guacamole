const usernameInput = document.querySelector('#username-field');
const titleInput = document.querySelector('#title-field');
const contentInput = document.querySelector('#content-field');
const submitButton = document.querySelector('#submit-button');

function storeBlog() {
    localStorage.setItem('usernames', JSON.stringify(usernames));
    localStorage.setItem('titles', JSON.stringify(titles));
    localStorage.setItem('contents', JSON.stringify(contents));
}

function clearFields() {
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
};

function goToBlog () {
    location.href = 'blog.html';
};

submitButton.addEventListener('click', function () {
    const usernameValue = usernameInput.value.trim();
    const titleValue = titleInput.value.trim();
    const contentValue = contentInput.value.trim();

    if (usernameValue === '' ||
        titleValue === '' ||
        contentValue === '') {
        return;
      }

    usernames.push(usernameValue);
    titles.push(titleValue);
    contents.push(contentValue);

    storeBlog();
    clearFields();
    goToBlog ();
});

onBoot();
