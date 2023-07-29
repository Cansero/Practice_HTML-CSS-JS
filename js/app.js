const nick = document.getElementById('nick');
const size = document.getElementById('size');
const forminput = document.getElementById('forminput');
const error = document.getElementById('error');

function formtest(event) {
    if (nick.value.length === 0) {
        event.preventDefault();
        error.innerText = 'NO NICK NAME';
        nick.focus();
    } else if (size.value === '0') {
        event.preventDefault();
        error.innerText = 'NO SIZE SELECTED';
        size.focus();
    }
}

forminput.addEventListener('submit', formtest);