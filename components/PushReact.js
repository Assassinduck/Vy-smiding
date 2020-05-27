import React from "react";
import { Text, View, Button, Vibration, Platform, StyleSheet, Switch, Image } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

class PushNotifications extends React.Component {
  state = {
    isEnabled: false,
    mounted: false,
    expoPushToken: "",
    notification: {},
    body: "",
    timer: 5,

  };

  sendPushNotification = async () => {
    // if(mounted){
    // this.setState((prevState => {
    //   isEnabled: !prevState.isEnabled
    // }))}
    const message = {
      to: this.state.expoPushToken,
      sound: "default",
      title: "VY",
      body: this.state.body,
      channelId: "android",
      data: { data: "goes here" },
      _displayInForeground: true,
    };
    
    // const response = await fetch("https://exp.host/--/api/v2/push/send", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Accept-encoding": "gzip, deflate",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(message),

      
    // });

    const schedulingOptions = {
      time: new Date().getTime() + (this.state.timer*1000)
    };
    Notifications.scheduleLocalNotificationAsync(message, schedulingOptions)
  }

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
     const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("android", {
        name: "android",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };



  _handleNotification = (notification) => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications

}

export default PushNotifications