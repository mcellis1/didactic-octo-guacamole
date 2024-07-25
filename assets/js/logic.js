let usernames = [];
let titles = [];
let contents = [];

function onBoot() {
    const localUsernames = JSON.parse(localStorage.getItem('usernames'));
    const localTitles = JSON.parse(localStorage.getItem('titles'));
    const localContents = JSON.parse(localStorage.getItem('contents'));

    if (localUsernames !== null &&
        localTitles !== null &&
        localContents !== null) {
        usernames = localUsernames;
        titles = localTitles;
        contents = localContents;
    }
}

// store local data entered in each field in to the local data on the browser
// const usernameInput = document.querySelector('#username-field');
// const titleInput = document.querySelector('#title-field');
// const contentInput = document.querySelector('#content-field');
// const submitButton = document.querySelector('#submit-button');

// function clearFields() {
//     usernameInput.value = '';
//     titleInput.value = '';
//     contentInput.value = '';
// };

// function goToBlog () {
//     location.href = 'blog.html';
// };

// submitButton.addEventListener('click', function () {
//     const usernameValue = usernameInput.value;
//     const titleValue = titleInput.value;
//     const contentValue = contentInput.value;

//     localStorage.setItem('username', usernameValue);
//     localStorage.setItem('title', titleValue);
//     localStorage.setItem('content', contentValue);

//     clearFields();
//     goToBlog ();
// });

// let localUsername = localStorage.getItem('username');
// let localTitle = localStorage.getItem('title');
// let localContent = localStorage.getItem('content');

// console.log(`${localUsername}`);
// console.log(`${localTitle}`);
// console.log(`${localContent}`);
// when the submit button is clicked it takes you to the blog page

// the local data is retrived and displayed on the screen in blocks

// when the back button is pushed it takes you back to the form page

// when the light mod dark mod button is pressed it turns the screen light or dark