import React from 'react'
import AppNavigation from './src/Navigation/AppNavigation'
// import PushController from './src/Navigation/PushController'
// import {PermissionsAndroid} from "react-native"
// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//  import * as firebaseobj from 'firebase';
//  import { firebaseConfig } from '../../config';
//  import firebase from 'firebase/compat/app';
//  import 'firebase/compat/auth';
//  import 'firebase/compat/firestore';
//  if(!firebaseobj.apps.length){
//     // Initialize Firebase
//     firebaseobj.initializeApp(firebaseConfig);
//  }
export default function App() {
  return (
    <>
    {/* <PushController/> */}
    <AppNavigation/>
    </>
  )
}