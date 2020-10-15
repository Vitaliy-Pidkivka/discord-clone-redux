import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCKiPIzmC1uBRzxwbUuF3pKCi4DZHJsIZc',
	authDomain: 'discord-clone-redux-57a28.firebaseapp.com',
	databaseURL: 'https://discord-clone-redux-57a28.firebaseio.com',
	projectId: 'discord-clone-redux-57a28',
	storageBucket: 'discord-clone-redux-57a28.appspot.com',
	messagingSenderId: '519179184336',
	appId: '1:519179184336:web:ad08a9fc9ac9176ec3d6d5',
	measurementId: 'G-0MY0SC7PXZ'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db