var time_spent = 0;
function session_end() {
    if (localStorage.getItem('time_spent'))
        time_spent = parseInt(localStorage.getItem('time_spent'));
    time_spent += 1000;
    localStorage.setItem('time_spent', time_spent);
}
//shut-up-digvijay
setInterval(session_end, 1000);
function time_calc() {
    let timespan = time_spent;
    let time_session;
    let hr, min, sec;
    hr = parseInt(timespan / (1000 * 60 * 60));
    min = (parseInt(timespan / (1000 * 60))) % 60;
    sec = (parseInt(timespan / (1000))) % 60;
    if (hr < 10) {
        if (hr < 2)
            time_session = '0' + hr + 'hr ';
        else
            time_session = '0' + hr + 'hrs ';
    }
    else {
        time_session = hr + 'hrs '
    }
    if (min < 10) {
        if (min < 2)
            time_session += '0' + min + 'min ';
        else
            time_session += '0' + min + 'mins ';
    }
    else {
        time_session += min + 'mins '
    }
    if (sec < 10) {
        if (sec < 2)
            time_session += '0' + sec + 'sec ';
        else
            time_session += '0' + sec + 'secs ';
    }
    else {
        time_session += sec + 'secs '
    }
    alert('Total time spent by you on home page is : ' + time_session)
}
function logout() {
    time_calc();
    localStorage.setItem('time_spent', 0);
    setTimeout(() => {
        firebase.auth().signOut();
    }, 1000);
}
