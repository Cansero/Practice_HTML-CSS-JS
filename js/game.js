let usernick = getdata('nick');
let gamesize = getdata('size');
let avatarsrc = getdata('avatar');

let nick = document.getElementById('nick');
let avatar = document.getElementById('avatar');
let game = document.getElementById('game');

if (nick === null) {
    setdata('NO PREVIOUS SESSION SAVED', 'error');
    window.location = 'index.html'
}

function makepanel() {
    game.style.gridTemplateColumns = 'repeat(' + gamesize + ', 1fr';
    game.style.gridTemplateRows = 'repeat(' + gamesize + ', 1fr';
}

nick.value = usernick;
avatar.src = avatarsrc;

makepanel();