var firebaseConfig={
  apiKey: "AIzaSyDZbyIMsKkyzkR47pitjBZkavyTTBfsScY",
  authDomain: "piano-towards-end.firebaseapp.com",
  projectId: "piano-towards-end",
  storageBucket: "piano-towards-end.appspot.com",
  messagingSenderId: "171901730776",
  appId: "1:171901730776:web:ceac2d7dd8da7a54bbfcad",
  measurementId: "G-T65DQYYXEQ"
};
var app=firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
//console.log(app.options);