import firebase from 'firebase'
import 'firebase/firestore'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxClIJoQSLVjuW_SyEoagOyrWvCICFexQ",
    authDomain: "todo-b16b1.firebaseapp.com",
    projectId: "todo-b16b1",
    storageBucket: "todo-b16b1.appspot.com",
    messagingSenderId: "983293039579",
    appId: "1:983293039579:web:0270f148f5b490b1444dfe",
    measurementId: "G-R4MTW2RDQE"
})

const db = firebaseApp.firestore()

export default db