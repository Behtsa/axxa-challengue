import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA1Jjr1i4JXtew-Hoakg1Y0q_wYUJ4fImg",
    authDomain: "fir-react-starter-32daf.firebaseapp.com",
    databaseURL: "https://fir-react-starter-32daf.firebaseio.com",
    projectId: "fir-react-starter-32daf",
    storageBucket: "fir-react-starter-32daf.appspot.com",
    messagingSenderId: "862609274252"
};


export default firebase.initializeApp(config);