import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import {  Vibration, Platform } from "react-native";
import moment from "moment";
import React from 'react';


export default {


  

    sendPushNotification() {
      console.log(this.expoPushToken);
      const message = {
        to: this.expoPushToken,
        sound: "default",
        title: "VY",
        body: this.body,
        data: { data: "notification" },
        _displayInForeground: true,
        channelId: "android",
        link: this.link
      };
      const schedulingOptions = {
        time: new Date().getTime() + (this.timer*1000)
      };

      console.log("Scheduling delayed notification:", {
        message,
        schedulingOptions
      });

      Notifications.scheduleLocalNotificationAsync(message, schedulingOptions)
        .then(id =>
          console.info(
            `Delayed notification scheduled (${id}) at ${moment(
              schedulingOptions.time
            ).format()}`
          )
        )
        .catch(err => console.error(err));

      /**
 * Ikke fjern dette enda, vet ikke helt hvorfor det introduserte en bug
      const response = await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
*/
    },
    async registerForPushNotificationsAsync() {
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
        let token = await Notifications.getExpoPushTokenAsync();

        console.log(token);
        this.expoPushToken = token;
      } else {
        alert("Must use physical device for Push Notifications");
      }

      if (Platform.OS === "android") {
        Notifications.createChannelAndroidAsync("android", {
          name: "default",
          sound: true,
          priority: "max",
          vibrate: [0, 250, 250, 250]
        });
      }
    },
    _handleNotification: function(notification) {
      Vibration.vibrate();
      this.notification = notification;
    }
  }
