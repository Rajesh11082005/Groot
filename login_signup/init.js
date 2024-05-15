const firebaseConfig = {
    apiKey: "AIzaSyCXNqoHndjyblAQjqNrtRguFA-Vi2PBv_4",
    authDomain: "groot-887e1.firebaseapp.com",
    projectId: "groot-887e1",
    storageBucket: "groot-887e1.appspot.com",
    messagingSenderId: "1055132509314",
    appId: "1:1055132509314:web:f3610f1e8b36a9c4fac09b",
    measurementId: "G-34FW1XLVZ7"
  };



const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
let user = firebase.auth().currentUser;
let username ;

function user_assign(){
  user =  firebase.auth().currentUser;
  return user;
}


async function get_user_name(){
  await db.collection("user").doc(user_assign().uid).get().then((s)=>{
     username =  s.data().name;
  });
  Project.user_setter(username);
  // return username;
}
