//few audio files had some error so I converted them to base64 format and then using js, played them by converting them to audio
var c3m, cs3m, d3m, ds3m, e3m, f3m, fs3m, g3m, gs3m, a4m, as4m, b4, c4m, cs4m, d4m, ds4m, e4m, f4m, fs4m, g4m, gs4m, a5m, as5m, b5m, c5m, cs5m, d5m, ds5m, e5m, f5m, fs5m, g5m, gs5m, a6m;
c3m = document.getElementById('c-3m');
cs3m = document.getElementById('cs-3m');
d3m = document.getElementById('d-3m');
ds3m = document.getElementById('ds-3m');
e3m = document.getElementById('e-3m');
f3m = document.getElementById('f-3m');
fs3m = document.getElementById('fs-3m');
g3m = document.getElementById('g-3m');
gs3m = document.getElementById('gs-3m');
a4m = document.getElementById('a-4m');
as4m = document.getElementById('as-4m');
b4 = document.getElementById('b-4m');
c4m = document.getElementById('c-4m');
cs4m = document.getElementById('cs-4m');
d4m = document.getElementById('d-4m');
ds4m = document.getElementById('ds-4m');
e4m = document.getElementById('e-4m');
f4m = document.getElementById('f-4m');
fs4m = document.getElementById('fs-4m');
g4m = document.getElementById('g-4m');
gs4m = document.getElementById('gs-4m');
a5m = document.getElementById('a-5m');
as5m = document.getElementById('as-5m');
b5m = document.getElementById('b-5m');
c5m = document.getElementById('c-5m');
cs5m = document.getElementById('cs-5m');
d5m = document.getElementById('d-5m');
ds5m = document.getElementById('ds-5m');
e5m = document.getElementById('e-5m');
f5m = document.getElementById('f-5m');
fs5m = document.getElementById('fs-5m');
g5m = document.getElementById('g-5m');
gs5m = document.getElementById('gs-5m');
a6m = document.getElementById('a-6m');
const keyCC = ['c-3', 'cs-3', 'd-3', 'ds-3', 'e-3', 'f-3', 'fs-3', 'g-3', 'gs-3', 'a-4', 'as-4', 'b-4', 'c-4', 'cs-4', 'd-4', 'ds-4', 'e-4', 'f-4', 'fs-4', 'g-4', 'gs-4', 'a-5', 'as-5', 'b-5', 'c-5', 'cs-5', 'd-5', 'ds-5', 'e-5', 'f-5', 'fs-5', 'g-5', 'gs-5', 'a-6'];
const note_name = ['c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a4', 'as4', 'b4', 'c4', 'cs4', 'd4', 'ds4', 'e4', 'f4', 'fs4', 'g4', 'gs4', 'a5', 'as5', 'b5', 'c5', 'cs5', 'd5', 'ds5', 'e5', 'f5', 'fs5', 'g5', 'gs5', 'a6'];
const keyP = ["q", "2", "w", "3", "e", "r", "5", "t", "6", "y", "7", "u", "i", "9", "o", "0", "p", "z", "s", "x", "d", "c", "f", "v", "b", "h", "n", "j", "m", ",", "l", ".", ";", "/"];
const playk = [c3m, cs3m, d3m, ds3m, e3m, f3m, fs3m, g3m, gs3m, a4m, as4m, b4, c4m, cs4m, d4m, ds4m, e4m, f4m, fs4m, g4m, gs4m, a5m, as5m, b5m, c5m, cs5m, d5m, ds5m, e5m, f5m, fs5m, g5m, gs5m, a6m];

var i = 0;
var record1;
record1 = false;
function pressA(ve) {
    if (ve.repeat)
        return;
    var time2 = new Date();
    for (var i = 0; i < keyP.length; i++) {
        if (ve.key.toLowerCase() == keyP[i]) {
            playk[i].currentTime = 0.0;
            playk[i].play();
            document.getElementById(keyCC[i]).style['box-shadow'] = "none";
            break;
        }
    }
}
window.addEventListener("keydown", pressA, false);
function unpressA(ve) {
    for (var i = 0; i < keyP.length; i++) {
        if (ve.key.toLowerCase() == keyP[i]) {
            document.getElementById(keyCC[i]).style['box-shadow'] = "3px 3px gray";
            break;
        }
    }
}
window.addEventListener("keyup", unpressA, false);
function mousedown_fun(ve) {
    var id_sh = document.getElementById(ve.target.id);
    id_sh.style['box-shadow'] = 'none';
    playk[keyCC.indexOf(ve.target.id)].currentTime = 0.0;
    playk[keyCC.indexOf(ve.target.id)].play();
    setTimeout(() => {
        id_sh.style['box-shadow'] = "3px 3px gray";
    }, 100);
}
(document.getElementsByClassName('container21')[0]).addEventListener('mousedown', mousedown_fun, false)
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//removing key press event before the save song song name box appears
function SaveNoteText_pause() {
    window.removeEventListener("keydown", pressA, false);
    window.removeEventListener("keyup", unpressA, false);
}
//adding key press event after the song name for saving has been entered
function SaveNotText_cont() {
    window.addEventListener("keydown", pressA, false);
    window.addEventListener("keyup", unpressA, false);
}

function style() {
    var mq = window.matchMedia("(max-width: 538px)");
    if (mq.matches) {
        let classkey = document.getElementsByClassName('key');
        let classwhite = document.getElementsByClassName('white');
        for (let i = 0; i < 12; i++) {
            classkey[i].style['display'] = 'none';
        }
        for (let i = 29; i < 34; i++) {
            classkey[i].style['display'] = 'none'
        }
    }
    //34 
    else {
        let classkey = document.getElementsByClassName('key');
        for (let i = 0; i < 12; i++) {
            classkey[i].style['display'] = 'block';
        }
        for (let i = 29; i < 34; i++) {
            classkey[i].style['display'] = 'block';
        }
    }
}
setInterval(() => {
    style();
}, 100);
