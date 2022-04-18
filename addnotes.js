function addLive(name, note_txt) {
    let name_id = name.replaceAll(' ', '-');
    let li = document.createElement('li');
    let note_name = document.createElement('span');
    let note = document.createElement('p');
    /*let img = document.createElement('img');
    let del = document.createElement('button');
    img.setAttribute('class', 'delete-note-button-img')
    img.src = 'photos/delete-icon.png';*/
    //let br = document.createElement('br');
    let note_name_text = document.createTextNode(name);
    let note_text = document.createTextNode(note_txt);
    note_name.appendChild(note_name_text);
    note.appendChild(note_text);
    // del.appendChild(img);
    note.setAttribute('class', 'note-inside-li');
    // del.setAttribute('class', 'delete-note-button');
    li.setAttribute('id', name_id);
    li.append(note_name, note);
    document.getElementsByTagName('ol')[0].appendChild(li);
}
function renderNote(reff) {
    reff.forEach((ref) => {
        let name_id = ref.name.replaceAll(' ', '-');
        let li = document.createElement('li');
        let note_name = document.createElement('span');
        let note = document.createElement('p');
        // let img = document.createElement('img');
        // let del = document.createElement('button');
        // img.setAttribute('class', 'delete-note-button-img')
        // img.src = 'photos/delete-icon.png';
        //let br = document.createElement('br');
        let note_name_text = document.createTextNode(ref.name);
        let note_text = document.createTextNode(ref.note);
        note_name.appendChild(note_name_text);
        note.appendChild(note_text);
        //del.appendChild(img);
        note.setAttribute('class', 'note-inside-li');
        //del.setAttribute('class', 'delete-note-button');
        li.setAttribute('id', name_id);
        li.append(note_name, note);
        document.getElementsByTagName('ol')[0].appendChild(li);
    });
}
function getdata() {
    let data, notes;
    var userRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
    userRef.get().then((doc) => {
        data = doc.data();
        notes = data.notes;
    }).then(() => {
        renderNote(notes);
    });
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        getdata();
    }
});
function user_input() {
    let name = document.getElementsByClassName('note-name-notes')[0].value;
    let note = document.getElementsByClassName('take-notes-input')[0].value;
    if(name.length==0||note.length==0)
    alert("Both fields found empty!!! Please enter name and respective note");
    else
    update_tofs(name, note);
    document.getElementsByClassName('note-name-notes')[0].value = '';
    document.getElementsByClassName('take-notes-input')[0].value = '';
}
function update_tofs(name_txt, note_txt) {
    var userRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
    userRef.update({
        notes: firebase.firestore.FieldValue.arrayUnion({
            name: name_txt,
            note: note_txt
        })
    }).then(() => {
        //console.log('added');
        addLive(name_txt, note_txt);
    });
}

function display_guidelines() {
    document.getElementById('guidelines').setAttribute('class', 'active-guide-help');
    document.getElementById('self-help').setAttribute('class', '');
    document.getElementsByTagName('ol')[0].style['display']='none';
    document.getElementsByTagName('ol')[1].style['display']='block';
}
function display_selfhelp() {
    document.getElementById('self-help').setAttribute('class', 'active-guide-help');
    document.getElementById('guidelines').setAttribute('class', '');
    document.getElementsByTagName('ol')[0].style['display']='block';
    document.getElementsByTagName('ol')[1].style['display']='none';
}