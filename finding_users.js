var data;
var starCountRef;
var users_no;
const users_list = document.getElementById('users_list');
const users_list_songs = document.getElementsByClassName('user_list_of_song')[0];
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
const note_name = ['c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a4', 'as4', 'b4', 'c4', 'cs4', 'd4', 'ds4', 'e4', 'f4', 'fs4', 'g4', 'gs4', 'a5', 'as5', 'b5', 'c5', 'cs5', 'd5', 'ds5', 'e5', 'f5', 'fs5', 'g5', 'gs5', 'a6'];
const playk = [c3m, cs3m, d3m, ds3m, e3m, f3m, fs3m, g3m, gs3m, a4m, as4m, b4, c4m, cs4m, d4m, ds4m, e4m, f4m, fs4m, g4m, gs4m, a5m, as5m, b5m, c5m, cs5m, d5m, ds5m, e5m, f5m, fs5m, g5m, gs5m, a6m];
var song_list;
var play_saved = [];
var paused = false;
var resume = true;
var pause_note_index = [];
var pause_time_index = [];
var time_played = 0;
var time_play_start;
var map = new Map();
var user_public;
//song_list, data, user_name
function user_songs(doc_copy, name) {
    name = name.replaceAll(' ', '_');
    let user_doc=doc_copy;
    map.set(name,user_doc);
}
function playtune(time, index) {
    play_saved.push(setTimeout(() => {
        if (pause)
            playk[index].currentTime = 0.0;
        playk[index].play();
    }, time));
}
function play_func(note_index, time_rec, time_played, id) {
    if (note_index.length == 0) {
        setTimeout(() => {
            show_button('play-music-button', id);
            hide_button('stop-music-button', id);
            //hide_button('pause-note-button', id);
            //hide_button('resume-note-button', id);
        }, 500);
    }
    for (let i = 0; i < note_index.length; i++) {
        play_saved.push(setTimeout(() => {
            if (paused) {
                //console.log("pause another step");
                let arr = note_index.splice(i, (note_index.length - i));
                pause_note_index = arr;
                arr = time_rec.splice(i, (time_rec.length - i));
                pause_time_index = arr;
                paused = false;
                // console.log(pause_note_index);
                // console.log(pause_time_index, arr);
                let length_playSaved = play_saved.length;
                while (length_playSaved > 0) {
                    clearTimeout(play_saved[length_playSaved - 1]);
                    length_playSaved--;
                }
                play_saved = [];
            }
            else {
                playk[note_index[i]].currentTime = 0.0;
                playk[note_index[i]].play();
                if (i == note_index.length - 1) {

                    setTimeout(() => {
                        show_button('play-music-button', id);
                        hide_button('stop-music-button', id);
                        //hide_button('pause-note-button', id);
                        //hide_button('resume-note-button', id);
                    }, 0);
                }
            }
        }, (time_rec[i] - time_played)));
        //console.log((time_rec[i] - time_played));
        // playtune(time_rec[i], note_index[i]);
    }
}
function hideAll(hide_btn_all) {
    for (let i = 0; i < hide_btn_all.length; i++) {
        hide_btn_all[i].style['display'] = 'none';
        //start_btn_all[i].style['display'] = 'block';
    }
}
function showAll(show_btn_all) {
    for (let i = 0; i < show_btn_all.length; i++) {
        //stop_btn_all[i].style['display'] = 'none';
        show_btn_all[i].style['display'] = 'block';
    }
}
function show_button(show_class, id) {
    let toShow = document.getElementsByClassName(show_class)[song_list.indexOf(id)];
    toShow.style['display'] = 'block';
}
function hide_button(hide_class, id) {
    let toHide = document.getElementsByClassName(hide_class)[song_list.indexOf(id)];
    toHide.style.display = 'none';
}
function updateUsers(user_name) {
    users_no++;
    let name_li = document.createElement('li');
    let user_span = document.createElement('span');
    user_name_wosp = user_name.replaceAll(' ', '_');
    name_li.setAttribute('id', [user_name_wosp]);
    name_li.setAttribute('class', 'users_list_sub')
    user_span.textContent = user_name;
    name_li.appendChild(user_span);
    users_list.appendChild(name_li);
}
function updateUsersSong(song_list_lo, doc_copy, name) {
    name = name.replaceAll(' ', '_');
    let userdivsong = document.createElement('div');
    userdivsong.setAttribute('id', name + '-songs');
    userdivsong.setAttribute('class', 'song-list-sub');
    userdivsong.style.display = 'none';
    users_list_songs.appendChild(userdivsong);
    // document.getElementById(name+'-songs').style.display='none';
    for (var i = 0; i < song_list_lo.length; i++) {
        let idset = song_list_lo[i];
        let li = document.createElement('li');
        let songname = document.createElement('span');
        //let city = document.createElement('span');
        li.setAttribute('id', [idset]);
        li.setAttribute('class', 'all_songs_user');
        songname.textContent = (doc_copy)[song_list_lo[i]]['song-name'];
        //city.textContent = doc.data().Education;
        li.appendChild(songname);
        //li.appendChild(city);
        document.getElementById([name + '-songs']).appendChild(li);
        let bu, bu2, bu3;
        bu = document.createElement('button');
        bu4 = document.createElement('button');
        bu6 = document.createElement('button');
        bu7 = document.createElement('button');
        var play_text = document.createTextNode("Play");
        var stop_text = document.createTextNode("Stop");
        var pause = document.createTextNode("Pause");
        var resume = document.createTextNode("Resume");
        bu.appendChild(play_text);
        bu.style.backgroundColor = 'greenyellow';
        bu.style.width = '50px';
        bu4.appendChild(stop_text);
        bu4.style.backgroundColor = 'tomato';
        bu4.style.width = '50px';
        bu6.appendChild(pause);
        bu7.appendChild(resume);
        bu.setAttribute('class', 'play-music-button');
        bu4.setAttribute('class', 'stop-music-button');
        //bu2.setAttribute('class', 'show-note-button');
        //bu3.setAttribute('class', 'hide-note-button');
        bu6.setAttribute('class', 'pause-note-button');
        bu7.setAttribute('class', 'resume-note-button');
        document.querySelector('#' + song_list_lo[i]).append(bu);
    }
}
function get_data() {
    starCountRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            data = doc.data();
            updateUsers(data.name);
            song_list = data.song_name_list;
            //console.log(data);
            //console.log(song_list);
            updateUsersSong(song_list, data, data.name);
            user_songs(data, data.name);
        })
    });
}
function userRefFunc() {
    users_no = 0;
    starCountRef = firebase.firestore().collection('users_pub');
    get_data();
}
document.getElementById('users_list').addEventListener('click', (e => {
    document.getElementsByClassName("users-songs-cont")[0].style.display = 'block';
    let id = e.target.id;
    document.getElementById('user_name_name').innerHTML = 'Name:\xa0\xa0' + id.replaceAll('_', ' ');
    user_public=map.get(id);
    song_list=user_public.song_name_list;
    console.log(id);
    for (i = 0; i < users_no; i++)
        document.getElementsByClassName('song-list-sub')[i].style.display = 'none';
    document.getElementById(id + '-songs').style.display = 'block';
}))
document.getElementById('song-list-public').addEventListener('click', (ve) => {
    ve.preventDefault();
    time_play_start;
    let notes_index_arr = [];
    let time_period_arr = [];
    let id_note = ve.target.parentElement.id;
    let class_clicked = ve.target.className;
    console.log(id_note);
    console.log(class_clicked);
    if (class_clicked == 'play-music-button') {
        let ref_songs=user_public[id_note];
        console.log(ref_songs)
        console.log(song_list);
        time_play_start = new Date();
        let length_playSaved = play_saved.length
        while (length_playSaved > 0) {
            clearTimeout(play_saved[length_playSaved - 1]);
            length_playSaved--;
        }
        play_saved = [];
        //let hide_btn_all = document.getElementsByClassName('stop-music-button');
        //let show_btn_all = document.getElementsByClassName('play-music-button');
        //hideAll(hide_btn_all);
        //showAll(show_btn_all);

        //hide_btn_all = document.getElementsByClassName('pause-note-button');
        //hideAll(hide_btn_all);
        //hide_btn_all = document.getElementsByClassName('resume-note-button');
        //hideAll(hide_btn_all);

        //hide_button('play-music-button', id_note);
        //show_button('stop-music-button', id_note);
        
        //show_button('pause-note-button', id_note);

        console.log(user_public);
        console.log(id_note);
        notes_index_direct = ref_songs['notes-index'];
        time_index_direct = ref_songs['time-period'];
        for (var i = 0; i < notes_index_direct.length; i++) {
            notes_index_arr.push(notes_index_direct[i]);
            time_period_arr.push(time_index_direct[i]);
        }
        play_func(notes_index_arr, time_period_arr, 0, id_note);
    }
    // else if (class_clicked == 'stop-music-button') {
    //     hide_button('resume-note-button', id_note);
    //     hide_button('pause-note-button', id_note);
    //     let length_playSaved = play_saved.length
    //     while (length_playSaved > 0) {
    //         clearTimeout(play_saved[length_playSaved - 1]);
    //         length_playSaved--;
    //     }
    //     play_saved = [];
    //     let stop_play_btn = document.getElementsByClassName('stop-music-button')[song_list.indexOf(id_note)];
    //     let start_play_btn = document.getElementsByClassName('play-music-button')[song_list.indexOf(id_note)];
    //     start_play_btn.style['display'] = 'block';
    //     stop_play_btn.style['display'] = 'none';
    //     console.log(id_note);
    //     notes_index_arr = user_public[id_note]['notes-index'];
    //     time_period_arr = user_public[id_note]['time-period'];
    // }
    // else if (class_clicked == 'pause-note-button') {
    //     //console.log("pause initiated")
    //     hide_button('pause-note-button', id_note);
    //     show_button('resume-note-button', id_note);
    //     paused = true;
    //     var time_paused = new Date();
    //     //console.log(time_paused, time_play_start)
    //     time_played = time_paused - time_play_start;
    //     //console.log(time_played);
    //     time_play_start = new Date();
    // }
    // else if (class_clicked == 'resume-note-button') {
    //     //console.log("resume pressed");
    //     hide_button('resume-note-button', id_note);
    //     show_button('pause-note-button', id_note);
    //     play_func(pause_note_index, pause_time_index, time_played, id_note);
    // }
});
