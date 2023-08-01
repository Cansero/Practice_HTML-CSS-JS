function setdata(data, asname) {
    sessionStorage.setItem(asname, data);
}

function getdata(data) {
    return sessionStorage.getItem(data);
}

function savehistory(nick) {
    let history = localStorage.getItem('history');
    if (!history) {
        history = [];
    } else {
        history = JSON.parse(localStorage.getItem('history'))
    }
    let item = {
        username: nick,
        date: Date.now()
    };
    history.push(item);
    localStorage.setItem('history', JSON.stringify(history));
}
