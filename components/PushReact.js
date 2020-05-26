import React from "react";
import { Text, View, Button, Vibration, Platform, StyleSheet, Switch, Image } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

export default class PushNotifications extends React.Component {
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
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("android", {
        name: "default",
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
    if(mounted){
    this.setState((prevState => {
      isEnabled: !prevState.isEnabled
    }))}
    const message = {
      to: this.state.expoPushToken,
      sound: "default",
      title: "Original Title",
      body: "And here is the body!",
      data: { data: "goes here" },
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
      <View style={styles.textContainer}>
          <Text>Skru på varsling 10 minutter</Text>
          <Text>før toget ankommer plattform</Text>
          <Switch
            style={styles.alertBtn}
            onValueChange={() => this.sendPushNotification()}
            value={this.state.isEnabled}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
});