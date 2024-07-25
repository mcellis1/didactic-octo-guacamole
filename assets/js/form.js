const usernameInput = document.querySelector('#username-field');
const titleInput = document.querySelector('#title-field');
const contentInput = document.querySelector('#content-field');
const submitButton = document.querySelector('#submit-button');

// let usernames = [];
// let titles = [];
// let contents = [];

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
    // goToBlog ();
});

// function onBoot() {
//     const localUsernames = JSON.parse(localStorage.getItem('usernames'));
//     const localTitles = JSON.parse(localStorage.getItem('titles'));
//     const localContents = JSON.parse(localStorage.getItem('contents'));

//     if (localUsernames !== null &&
//         localTitles !== null &&
//         localContents !== null) {
//         usernames = localUsernames;
//         titles = localTitles;
//         contents = localContents;
//     }
// }

onBoot();

console.log(usernames);
console.log(titles);
console.log(contents);
// function storeTodos() {
//     // Stringify and set key in localStorage to todos array
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }
  
//   // Add submit event to form
//   todoForm.addEventListener('submit', function (event) {
//     event.preventDefault();
  
//     const todoText = todoInput.value.trim();
  
//     // Return from function early if submitted todoText is blank
//     if (todoText === '') {
//       return;
//     }
  
//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     todoInput.value = '';
  
//     // Store updated todos in localStorage, re-render the list
//     storeTodos();