const config = {
  apiKey: "AIzaSyDDiZNc3_ET4pMZqGlGEnTimjDooUcM7v4",
  authDomain: "gtletsgo2018.firebaseapp.com",
  databaseURL: "https://gtletsgo2018.firebaseio.com",
  projectId: "gtletsgo2018",
  storageBucket: "gtletsgo2018.appspot.com",
  messagingSenderId: "619037977377"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// const database = firebase.database();

// get elements
const txtEmail = document.getElementById("email");
const txtPassword = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// add login event listener
loginBtn.addEventListener("click", event => {
  // get email and password for authentication
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(event => console.log(event.message));
});

signupBtn.addEventListener("click", event => {
  // use mailboxlayer api to check for valid email
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(event => console.log(event.message));
});

// signs out the authenticated listener
logoutBtn.addEventListener("click", event => {
  firebase.auth().signOut();
});

// real time authentication lister
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    // firebase unique user id
    console.log(firebaseUser.uid)
    logoutBtn.classList.remove('hide');
  } else {
    console.log("not logged in");
    logoutBtn.classList.add('hide');
  }
});

// store emails and hash password
