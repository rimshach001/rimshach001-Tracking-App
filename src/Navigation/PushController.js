import React, {Component} from "react";
import PushNotification from "react-native-push-notification";
import {PermissionsAndroid} from "react-native"
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
// var PushNotification = require("react-native-push-notification");

export default class PushController extends Component{
    componentDidMount(){

            messaging().onNotificationOpenedApp(remoteMessage => {
        console.log( 'Notification caused app to open from background state:', remoteMessage, );
      });
      
      // Check whether an initial notification is available
      messaging().getInitialNotification().then(remoteMessage => {
          console.log( 'Notification caused app to open from quit state:', remoteMessage, );
      });

        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
              console.log("TOKEN:", token);
            },
          
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
              console.log("NOTIFICATION:", notification);
          
              // process the notification here
          
           },
            // Android only
            senderID: "532697981056",
            popInitialNotification: true,
            requestPermissions: true
          });
    }

    render(){
        return null;
    }
}