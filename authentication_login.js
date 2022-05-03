document.querySelector('#sign-in').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.querySelector('#password-reset-link').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
document.querySelector('#sign-up').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
});
var signup = false;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if (signup) {
            var name = document.querySelector('#name-signUp').value;
            let name_wosp=name.replaceAll(' ','_');
            var userRefAll = firebase.firestore();
            var userRef = userRefAll.collection('users').doc(firebase.auth().currentUser.uid);
            var userRefPub = userRefAll.collection('users_pub').doc(firebase.auth().currentUser.uid);
            var setWithMerge = userRef.set({
                'song_name_list': [],
                'notes': [],
                'name': name
            }, { merge: true }).then(() => {
                //console.log("Document successfully written!");
                var setWithMerge2 = userRefPub.set({
                    'song_name_list': [],
                    'notes': [],
                    'name': name
                }, { merge: true }).then(() => {
                    alert('Signed up successfully!!');
                    location.replace("piano.html");
                }).catch((error) => {
                    alert(error.message);
                });
            }).catch((error) => {
                alert(error.message);
            });
            signup = false;
            // setTimeout(() => {
            //     location.replace("piano.html");
            // }, 1000);
        }
        else {
            location.replace("piano.html");
        }
    }
});
document.querySelector('#sign-in').addEventListener('click', function (e) {
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message;
        });
});
function hideShow() {
    var show = document.getElementById("signUpForm");
    var hide = document.getElementById("loginForm");
    var hide3 = document.getElementById("woLogin");
    var hide2 = document.getElementById("signup-cont");
    show.style.display = "block";
    hide.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";
}
function signUp() {
    signup = true;
    var email = document.querySelector('#email-signUp').value;
    var password = document.querySelector('#password-signUp').value;
    if (!(document.querySelector('#name-signUp').value.trim() == ''))
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            var user = userCredential.user;
        }).catch((error) => {
            document.getElementById("error").innerHTML = error.message;
        });
    else {
        alert('Please write your name');
    }
}

function forgotPass() {
    let hide = document.getElementById("password-c");
    hide.style.display = "none";
    let hide1 = document.getElementById("sign-in");
    hide1.style.display = "none";
    let show = document.getElementById("password-reset-link");
    show.style.display = "block";
}
function send_reset_link() {
    const email = document.getElementById("email").value;
    firebase.auth().sendPasswordResetEmail(email).then(() => {
        alert("Reset password link send to your email id");
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("error").innerHTML = errorMessage;
    });
}
