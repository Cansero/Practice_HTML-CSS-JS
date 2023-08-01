let nick = getdata('nick');
if (nick === null) {
    setdata('NO PREVIOUS SESSION SAVED', 'error');
    window.location = 'index.html'
}
