import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

 firebase.initializeApp(config);

 const database = firebase.database();

 export { firebase, database as default };



















//  database.ref('expenses').on('child_removed', (snapshot) => {
//      console.log(snapshot.key, snapshot.val());
//  });

//  database.ref('expenses').on('child_changed', (snapshot) => {
//      console.log(snapshot.key, snapshot.val());
//  });

//  database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//  database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//          snapshot.forEach((childSnapshot) => {
//              expenses.push({
//                  id: childSnapshot.key,
//                  ...childSnapshot.val()
//              });
//          });
    
//          console.log(expenses)
//  });

//  database.ref('expenses').once('value').then((snapshot) => {
//      const expenses = [];
//      snapshot.forEach((childSnapshot) => {
//          expenses.push({
//              id: childSnapshot.key,
//              ...childSnapshot.val()
//          });
//      });

//      console.log(expenses)
//  });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 100,
//     createdAt: 7971599
// });



//  database.ref('notes').push({
//      title: 'Course Topics',
//      body: 'React Native, Angular, Python'
//  });

//  const firebaseNotes = {
//      notes: {
//          fdbht325svs: {
//             title: 'First note!',
//             body: 'This is my note'
//          }, 
//          dfbdfghgmj3ry: {
//             title: 'Another note',
//             body: 'This is my note'
//          },
//          75855978cdsfsd: {
//             title: 'Special note',
//             body: 'Breaking Limit'
//          }
//      }
//  }

//  const notes = [{
//      id: '12',
//      title: 'First note!',
//      body: 'This is my note'
//  }, {
//      id: 'dfdf3',
//      title: 'Another note',
//      body: 'This is my note'
//  }, {
//      id: 'dfghgfj8',
//      title: 'Special note',
//      body: 'Breaking Limit'
//  }];

//  database.ref('notes').set(notes);



//  database.ref('note').push({
//      title: 'Course Topics',
//      body: 'React Native, Angular, Python, Ruby'
//  });

//  const firebaseNotes = {
//      notes: {
//          fg52nfdn: {
//              title: 'First note!',
//              body: 'This is my note'
//          },
//          fbdfsbdfaf209138r: {
//              title: 'Another note',
//              body: 'This is my note'
//          }
//      }
//  };

//  const notes = [{
//      id: '12',
//      title: 'First note!',
//      body: 'This is my note'
//  }, {
//      id: '723as',
//      title: 'Another note',
//      body: 'This is my note'
//  }];

 // database.ref('note').set(firebaseNotes)

//  database.ref().on('value', (snapshot) => {
//      const val = snapshot.val();
//      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//  })

//  const onValueChange =  database.ref().on('value', (snapshot) => {
//      console.log(snapshot.val());
//  }, (e) => {
//      console.log('Error with data fetching', e);
//  });

//  setTimeout(() => {
//      database.ref('age').set(20);
//  }, 3500);

//  setTimeout(() => {
//     database.ref('age').set(onValueChange);
// }, 7500);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/country').once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data', e);
// });

// database.ref().set({
//     name: 'sunday Joseph',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Lagos',
//         country: 'Nigeria'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e)=>  {
//     console.log('This failed.', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Los Angeles'

// })



// database.ref().update({
//     job: 'Manager',
//     location: {
//         city: 'Boston',
//         country: 'United States of America',
//         countryFrom: 'Nigeria' 
//     }
// })

//database.ref('isSingle').set(null);

// database.ref().remove().then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });