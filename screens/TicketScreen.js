import React, { useState, useEffect, Component } from "react";
import {
  Text,
  View,
  Button,
  Vibration,
  Platform,
  StyleSheet,
  Switch,
  Image,
} from "react-native";

class TicketScreen extends Component {


  state = {
    isEnabled: false,
    mounted: false,
    expoPushToken: "",
    notification: {},
  };

    
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



  componentDidMount() {
    this.registerForPushNotificationsAsync();

    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = (notification) => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  sendPushNotification = async () => {
    

    const message = {
      to: this.state.expoPushToken,
      sound: "default",
      title: "Vy",
      body: "And here is the body!",
      data: { data: "goes here" },
      channelId: "android",
      _displayInForeground: true,
    };

    const schedulingOptions = {
      time: new Date().getTime() + (5000)
    };
    Notifications.scheduleLocalNotificationAsync(message, schedulingOptions)
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.ticketCode}
          source={require("../assets/images/ticketCode.png")}
        />
        <Text style={styles.ticketText}>Billettnummer: 7738291</Text>
        <Text style={styles.ticketText}>Referanse nummer: QZBN</Text>
      </View>
    );
  }
}

export default TicketScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },

  ticketCode: {
    position: "absolute",
    top: 70,
    width: 300,
    height: 300,
  },
  ticketText: {
    position: "relative",
    top: 100,
    padding: 10,
  },
});
