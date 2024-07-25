let usernames = [];
let titles = [];
let contents = [];
const lightDarkBtn = document.querySelector('#light-dark-btn');

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

lightDarkBtn.addEventListener('click', function () {
    if (lightDarkBtn.textContent == '🌙') {
        document.body.setAttribute('style', 'background-color: var(--darkmodefont); color: var(--darkbackground);');
        lightDarkBtn.innerHTML = '☀️';
    } else {
        document.body.setAttribute('style', 'background-color: var(--darkbackground); color: var(--darkmodefont);');
        lightDarkBtn.innerHTML = '🌙';
    }
});
