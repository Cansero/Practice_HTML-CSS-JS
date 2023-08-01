const nick = document.getElementById('nick');
const email = document.getElementById('email');
const size = document.getElementById('size');
const forminput = document.getElementById('forminput');
const error = document.getElementById('error');
const avataritems = document.getElementsByClassName('avatarimgitem');
const avatarcontainer = document.getElementById('avatarcontainer');
const avatarimg = document.getElementById('avatarimg');
let imgdrop;

if (getdata('error')) {
    error.innerText = getdata('error')
    sessionStorage.removeItem('error')
}

function formtest(event) {
    if (nick.value.length === 0) {
        event.preventDefault();
        error.innerText = 'NO NICK NAME';
        nick.focus();
        return false;
    } else if (size.value === '0') {
        event.preventDefault();
        error.innerText = 'NO SIZE SELECTED';
        size.focus();
        return false;
    }
    setdata(nick.value, 'nick');
    if (email.value) {
        setdata(email.value, 'email');
    }
    setdata(size.value, 'size');
    setdata(avatarimg.src, 'avatar')
    savehistory(nick.value);
}

function imgmov(event) {
    imgdrop = event.target;
}

function setimg() {
    avatarimg.src = imgdrop.src;
}

// Main
forminput.addEventListener('submit', formtest);

for (let avataritem of avataritems) {
    avataritem.addEventListener('dragstart', imgmov);
    avataritem.addEventListener('click', event => {
        avatarimg.src = event.target.src;
    });
}

avatarcontainer.addEventListener('dragover', event => {
    event.preventDefault();
});
avatarcontainer.addEventListener('drop', setimg)
