import React, {useState, useEffect, Component } from 'react';
import { Text, View, Button, Vibration, Platform, StyleSheet, Switch, Image } from 'react-native'
import { Notifications } from "expo";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";








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

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    

    const message = {
      to: this.state.expoPushToken,
      sound: "default",
      title: "Vy",
      body: "And here is the body!",
      data: { data: "goes here" },
      _displayInForeground: true,
      channelId: "android",
      _displayInForeground: true,
    };
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>Skru på varsling 10 minutter</Text>
          <Text>før toget ankommer plattform</Text>
          <Button
            title="notification"
            style={styles.alertBtn}
            onPress={() => this.sendPushNotification()
            }
          />
        </View>
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
  },
  headerText: {
    position: "absolute",
    top: -20,
    fontSize: 30,
  },
  alertBtn: {
    position: "absolute",
    borderRadius: 50,
    top: 20,
    right: 10,
  },
  textContainer: {
    position: "absolute",
    top: 35,
    padding: 10,
    borderWidth: 3,
    borderColor: "#00957a",
    borderRadius: 15,
    width: 350,
  },
  ticketCode: {
    position: "absolute",
    top: 150,
    width: 300,
    height: 300,
  },
  ticketText: {
    position: "relative",
    top: 190,
    padding: 10,
  },
});


