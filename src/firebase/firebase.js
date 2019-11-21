import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyARYvRewcPFmIWhLuerifDzHsy57SY_bOQ",
    authDomain: "expensify-c1e4f.firebaseapp.com",
    databaseURL: "https://expensify-c1e4f.firebaseio.com",
    projectId: "expensify-c1e4f",
    storageBucket: "expensify-c1e4f.appspot.com",
    messagingSenderId: "562959907713",
    appId: "1:562959907713:web:d43d5374534956033f8680",
    measurementId: "G-TF5CYSJJ85"
};

 firebase.initializeApp(config);

 firebase.database().ref().set({
     name: 'Sunday Joseph',
     age: 26,
     isSingle: false,
     location: {
         city: 'Lagos',
         country: 'Nigeria'
     }
 });