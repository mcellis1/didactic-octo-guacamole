const lightDarkBtn = document.querySelector('#light-dark-btn');

lightDarkBtn.addEventListener('click', function () {
    if (lightDarkBtn.textContent == '🌙') {
        document.body.setAttribute('style', 'background-color: var(--darkmodefont); color: var(--darkbackground);');
        lightDarkBtn.innerHTML = '☀️';
    } else {
        document.body.setAttribute('style', 'background-color: var(--darkbackground); color: var(--darkmodefont);');
        lightDarkBtn.innerHTML = '🌙';
    }
});
