let usernick = getdata('nick');
let gamesize = getdata('size');
let avatarsrc = getdata('avatar');

let nick = document.getElementById('nick');
let avatar = document.getElementById('avatar');
let game = document.getElementById('game');

if (usernick === null) {
    setdata('NO PREVIOUS SESSION SAVED', 'error');
    window.location = 'index.html'
}

function randintpick(max) {
    return Math.floor(Math.random() * max);
}

function makepanel() {
    game.style.gridTemplateColumns = 'repeat(' + gamesize + ', 1fr';
    game.style.gridTemplateRows = 'repeat(' + gamesize + ', 1fr';

    let items = '';
    let colors = ['red', 'green'];
    let color = colors[randintpick(colors.length)];
    for (let i = 0; i < (parseInt(gamesize)**2); i++) {
        if (i%2>0) color =  colors[randintpick(colors.length)];
        items += `<div class="containeritem"><div class="item ${color}"></div></div>`;
    }
    game.innerHTML = items;
}

nick.value = usernick;
avatar.src = avatarsrc;

makepanel();
