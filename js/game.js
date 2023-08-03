let usernick = getdata('nick');
let gamesize = getdata('size');
let gamesizeint = parseInt(gamesize);
let avatarsrc = getdata('avatar');

let nick = document.getElementById('nick');
let avatar = document.getElementById('avatar');
let game = document.getElementById('game');
let score = document.getElementById('score');
let time = document.getElementById('time');

let pressed = false;
let adjacents = [];
let markedclass = undefined;
let markedids = [];
let colors = ['red', 'green'];
let intervalID = undefined;

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
    let color = colors[randintpick(colors.length)];
    for (let i = 0; i < (gamesizeint**2); i++) {
        if (i%2>0) color =  colors[randintpick(colors.length)];
        items += `<div class="containeritem"><div id="${i}" class="item ${color}"></div></div>`;
    }

    game.innerHTML = items;
}

function markdot(event) {
    let itemcolor = event.target.classList[1];
    let container = event.target.parentElement;

    pressed = true;
    container.classList.add(itemcolor);
    setadjacents(parseInt(event.target.id));
    markedclass = itemcolor;
    markedids.push(event.target.id);
}

function followup(event) {
     if (pressed && adjacents.includes(parseInt(event.target.id)) && event.target.classList.contains(markedclass)) {
         let item = event.target;
         let itemcolor = item.classList[1];
         let container = event.target.parentElement;
         container.classList.add(itemcolor);
         setadjacents(parseInt(event.target.id));
         markedids.push(item.id);
     }
}

function finished() {
    pressed = false;
    adjacents = [];

    if (markedids) {
        score.value = parseInt(score.value) + markedids.length;
    }

    for (const markedid of markedids) {
        let markeditem = document.getElementById(markedid);
        markeditem.parentElement.classList.remove(markedclass);
        let color = colors[randintpick(colors.length)];
        markeditem.classList.remove(markedclass);
        markeditem.classList.add(color);
    }

    markedids = [];
}

function setadjacents(markid) {
    adjacents = [
        ((markid-gamesizeint)>=0) ? markid-gamesizeint : undefined,
        ((markid+gamesizeint)<gamesizeint**2) ? markid+gamesizeint : undefined,
        ((markid%gamesizeint)>0) ? markid-1 : undefined,
        (((markid+1)%gamesizeint)>0) ? markid+1 : undefined,
    ];
}

function gameEvents() {
    const items = document.getElementsByClassName('item');

    for (let item of items) {
        item.addEventListener('mousedown', markdot)
        item.addEventListener('mouseover', followup);
    }

    document.addEventListener("mouseup", finished);
}

function countdown() {
    time.value = parseInt(time.value) - 1;
    if (time.value === '0') {
        clearInterval(intervalID);
    }
}

nick.value = usernick;
avatar.src = avatarsrc;

makepanel();
gameEvents();
intervalID = setInterval(countdown, 1000);