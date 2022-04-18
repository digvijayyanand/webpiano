// sh: show
function pre_text() {
    let record_text = "Hi Pianist, I am your personal help. I'll be assisting you in understanding the functionality of this web Piano :).";
    let record_text_display = '';
    let a=record_text.length;
    for (let i = 0; i < record_text.length; i++) {
        setTimeout(() => {
            record_text_display += record_text[i];
            //console.log(record_text_display);
            document.getElementsByClassName('progress-box')[0].innerHTML = '<small>'+record_text_display+'</small>';
        }, 25 * i);
    }
    let record_text2="Save option will be available once you have recorded the note";
    let record_text_display2='';
    for(let i = 0; i < record_text2.length; i++){
        setTimeout(() => {
            record_text_display2 += record_text2[i];
            //console.log(record_text_display2);
            document.getElementsByClassName('progress-box')[1].innerHTML = '<small>'+record_text_display2+'</small>';
        }, 25 * (i+a));
    }
}
pre_text();
function shSaveNoteName() {
    let sh = document.getElementsByClassName('save-note-name-container-display')[0];
    let hi = document.getElementsByClassName('save-note-icon-replica')[0];
    sh.style['display'] = 'block';
    hi.style['display'] = 'none';
    setTimeout(() => {
        document.getElementById('progress-box').innerHTML = "Please enter the name you would like to give to your song/music in the given box below..";
    }, 400);
}
function hiSaveNoteAsk() {
    setTimeout(() => {
        document.getElementById('progress-box').innerHTML = "\xa0\xa0\xa0:(";
        let hi = document.getElementsByClassName('save-note-icon-replica')[0];
        hi.style['display'] = 'none';
    }, 400);
    setTimeout(() => {
        document.getElementById('progress-box').innerHTML = "Hi Pianist, I am your personal help. I'll be assisting you in understanding the functionality of this web Piano :)";
    }, 1200);
}
// function hiSaveNoteName() {
//     setTimeout(() => {
//         let hi = document.getElementsByClassName('save-note-name-container-display')[0];
//         hi.style['display'] = 'none';
//         document.getElementById('progress-box').innerHTML = "Saved :)";
//     }, 1000);
//     setTimeout(() => {
//         document.getElementById('progress-box').innerHTML = "Hi Pianist, I am your personal help. I'll be assisting you in understanding the functionality of this web Piano :) ";
//     }, 2000);
// }
