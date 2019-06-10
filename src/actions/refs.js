import { firebaseConfig } from './config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const usersRef = databaseRef.child('users');
export const authRef = firebase.auth();
export const adminsRef = databaseRef.child('admins');
