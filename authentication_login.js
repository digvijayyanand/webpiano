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
            var userRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
            var setWithMerge = userRef.set({
                'song_name_list': [],
                'notes': []
            }, { merge: true }).then(() => {
                //console.log("Document successfully written!");
                alert('Signed up successfully!!');
                location.replace("piano.html");
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
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        var user = userCredential.user;
    }).catch((error) => {
        document.getElementById("error").innerHTML = error.message;
    });
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