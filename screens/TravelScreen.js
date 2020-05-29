import React, { Component, useState } from "react";
import {
  Text,
  View,
  Switch,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Vibration,
} from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

class TravelScreen extends Component {
  state = {
    isEnabled: false,
    isEnabledArrival: false,
    isEnabledAttractions: false,
    mounted: false,
    expoPushToken: "",
    notification: {},
  };

  valueChangeArrival = () => {
    this.setState((prevState) => ({
      isEnabledArrival: !prevState.isEnabledArrival,
    }));
  };

  valueChangeAttractions = () => {
    this.setState((prevState) => ({
      isEnabledAttractions: !prevState.isEnabledAttractions,
    }));
  };

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
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

  sendPushNotification = async () => {
    this.setState((prevState) => ({
      isEnabled: !prevState.isEnabled,
    }));
    console.log(this.state.isEnabled);

    if (!this.state.isEnabled) {
      const message = {
        to: this.state.expoPushToken,
        sound: "default",
        title: "VY",
        body: "toget ankommer platformen om 10 min",
        channelId: "android",
        data: { data: "goes here" },
        _displayInForeground: true,
      };

      const schedulingOptions = {
        time: new Date().getTime() + 1000,
      };
      Notifications.scheduleLocalNotificationAsync(message, schedulingOptions);
    }
  };

  _handleNotification = (notification) => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/images/vy.logo.final_primary.png")}
        />

        <TouchableOpacity style={styles.addBtn} title="Button">
          <Button
            onPress={() => navigation.navigate("Del din reise")}
            style={styles.button}
            title="Del din reise"
            color="#00957a"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addBtn} title="Button">
          <Button
            style={styles.button}
            title="Reiseoversikt"
            color="#00957a"
            onPress={() => navigation.navigate("Reiseoversikt")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addBtn} title="Button">
          <Button
            style={styles.button}
            title="Din billett"
            color="#00957a"
            onPress={() => navigation.navigate("Billett")}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text>Skru på varsling 10 minutter</Text>
          <Text>før toget ankommer plattform</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00957a" }}
            thumbColor={this.state.isEnabled ? "#00957a" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.sendPushNotification}
            value={this.state.isEnabled}
            style={styles.switch}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Skru på varslinger når toget passerer</Text>
          <Text>passerer serverdigheter under reisen</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00957a" }}
            thumbColor={this.state.isEnabledAttractions ? "#00957a" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.valueChangeAttractions}
            value={this.state.isEnabledAttractions}
            style={styles.switch}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Skru på varsling 10 minutter</Text>
          <Text>før du annkommer destinasjon</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00957a" }}
            thumbColor={this.state.isEnabledArrival ? "#00957a" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={this.valueChangeArrival}
            value={this.state.isEnabledArrival}
            style={styles.switch}
          />
        </View>
      </View>
    );
  }
}
export default TravelScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 100,
  },
  textContainer: {
    position: "relative",
    marginTop: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: "#00957a",
    borderRadius: 15,
    width: 350,
  },

  switch: {
    position: "absolute",
    top: 16,
    right: 30,
  },

  addBtn: {
    margin: 10,
    justifyContent: "center",
    top: -50,
    width: 200,
  },

  logo: {
    position: "relative",
    alignItems: "center",
    top: -70,
    width: 70,
    height: 70,
  },
});
