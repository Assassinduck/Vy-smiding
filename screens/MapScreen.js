import React, { Component, useState } from "react";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  Text,
  View,
  Switch,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Vibration,
  Platform,
} from "react-native";
import { ProviderPropType, Marker, AnimatedRegion } from "react-native-maps";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import * as firebaseCreate from "../firebase";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


const coordinates = [
  {
    latitude: 59.911491,
    longitude: 10.757933,
  },
  {
    latitude: 60.390022,
    longitude: 5.334514,
  },
];

const db= firebase.firestore();

const GOOGLE_MAPS_APIKEY = "AIzaSyB3ReUNZCJIJnlpNT-1UchzSaX5gpJdGT0";

const coordinateData = [];

const notificationData = [];

var body ="";
var timer =0;
var link ="";



class MapScreen extends React.Component {


  state = {
    Origin: new AnimatedRegion({
      latitude: 59.911491,
      longitude: 10.757933,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Sandvika: new AnimatedRegion({
      latitude: 59.892806,
      longitude: 10.526087,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Asker: new AnimatedRegion({
      latitude: 59.834079,
      longitude: 10.435004,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Drammen: new AnimatedRegion({
      latitude: 59.740068,
      longitude: 10.20486,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Hokksund: new AnimatedRegion({
      latitude: 59.767305,
      longitude: 9.910776,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Vikersund: new AnimatedRegion({
      latitude: 59.969203,
      longitude: 9.998008,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Hønefoss: new AnimatedRegion({
      latitude: 60.169167,
      longitude: 10.24957,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Flå: new AnimatedRegion({
      latitude: 60.432071,
      longitude: 9.473048,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Nes: new AnimatedRegion({
      latitude: 60.576714,
      longitude: 9.11325,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Gol: new AnimatedRegion({
      latitude: 60.699042,
      longitude: 8.97049,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Ål: new AnimatedRegion({
      latitude: 60.626526,
      longitude: 8.561386,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Geilo: new AnimatedRegion({
      latitude: 60.534628,
      longitude: 8.206693,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Ustaoset: new AnimatedRegion({
      latitude: 60.496114,
      longitude: 8.045866,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Haugastøl: new AnimatedRegion({
      latitude: 60.511394,
      longitude: 7.869734,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Finse: new AnimatedRegion({
      latitude: 60.601945,
      longitude: 7.503767,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Hallingskeid: new AnimatedRegion({
      latitude: 60.668026,
      longitude: 7.252333,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Myrdal: new AnimatedRegion({
      latitude: 60.743504,
      longitude: 7.129848,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Voss: new AnimatedRegion({
      latitude: 60.629252,
      longitude: 6.410842,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Dale: new AnimatedRegion({
      latitude: 60.586441,
      longitude: 5.815096,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Arna: new AnimatedRegion({
      latitude: 60.420482,
      longitude: 5.467597,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    Bergen: new AnimatedRegion({
      latitude: 60.390022,
      longitude: 5.334514,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
    expoPushToken: "",
    notification: {},

  };
     

    animate = () => {
      // this.setState({
      //   timer: 0,
      // });
    

      const coordinate0 = this.state.Origin;
      const coordinate1 = this.state.Sandvika;
      const coordinate2 = this.state.Asker;
      const coordinate3 = this.state.Drammen;
      const coordinate4 = this.state.Hokksund;
      const coordinate5 = this.state.Vikersund;
      const coordinate6 = this.state.Hønefoss;
      const coordinate7 = this.state.Flå;
      const coordinate8 = this.state.Nes;
      const coordinate9 = this.state.Gol;
      const coordinate10 = this.state.Ål;
      const coordinate11 = this.state.Geilo;
      const coordinate12 = this.state.Ustaoset;
      const coordinate13 = this.state.Haugastøl;
      const coordinate14 = this.state.Finse;
      const coordinate15 = this.state.Hallingskeid;
      const coordinate16 = this.state.Myrdal;
      const coordinate17 = this.state.Voss;
      const coordinate18 = this.state.Dale;
      const coordinate19 = this.state.Arna;
      const coordinate20 = this.state.Bergen;

        for(var i=0; i<notificationData.length; i++){
          body=notificationData[i].body;
          timer=notificationData[i].timer;
          link=notificationData[i].link;

          this.sendPushNotification();
        }

        console.log(coordinateData[0].latitude)
      coordinate0.timing(coordinateData[0]).start();
      coordinate1.timing(coordinateData[1]).start();
      coordinate2.timing(coordinateData[2]).start();
      coordinate3.timing(coordinateData[3]).start();
      coordinate4.timing(coordinateData[4]).start();
      coordinate5.timing(coordinateData[5]).start();
      coordinate6.timing(coordinateData[6]).start();
      coordinate7.timing(coordinateData[7]).start();
      coordinate8.timing(coordinateData[8]).start();
      coordinate9.timing(coordinateData[9]).start();
      coordinate10.timing(coordinateData[10]).start();
      coordinate11.timing(coordinateData[11]).start();
      coordinate12.timing(coordinateData[12]).start();
      coordinate13.timing(coordinateData[13]).start();
      coordinate14.timing(coordinateData[14]).start();
      coordinate15.timing(coordinateData[15]).start();
      coordinate16.timing(coordinateData[16]).start();
      coordinate17.timing(coordinateData[17]).start();
      coordinate18.timing(coordinateData[18]).start();
      coordinate19.timing(coordinateData[19]).start();
    }

    componentDidMount = () => {
      this.registerForPushNotificationsAsync();

      db.collection('Notification').orderBy('timer', 'asc').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data())
          notificationData.push(doc.data())
        })
      })

    db.collection('Coordinates').orderBy('delay', 'asc').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        coordinateData.push(doc.data());
      });
      //console.log("data " + coordinateData);
      for(var i=0; i<coordinateData.length; i++){
        console.log(i)
        console.log("latitude: " +coordinateData[i].latitude)
        console.log("Longitude: " + coordinateData[i].longitude)
        console.log("Duration: "+coordinateData[i].duration)
        console.log("Delay: "+coordinateData[i].delay)
        console.log("  ")
      }
    })
    .catch(error => {
      console.log('Error!', error);
    })

    


      //console.log(db.collection('Coordinates').get());

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
      // if(mounted){
      // this.setState((prevState => {
      //   isEnabled: !prevState.isEnabled
      // }))}
      const message = {
        to: this.state.expoPushToken,
        sound: "default",
        title: "VY",
        body: body,
        link: link,
        channelId: "android",
        data: { data: "goes here" },
        _displayInForeground: true,
      };
    

      const schedulingOptions = {
        time: new Date().getTime() + (timer * 1000)
      };
      Notifications.scheduleLocalNotificationAsync(message, schedulingOptions)
    }

    _handleNotification = (notification) => {
      Vibration.vibrate();
      console.log(notification);
      this.setState({ notification: notification });
    };
  
    render() {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.container}
            initialRegion={{
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              latitude: 59.911491,
              longitude: 10.757933,
            }}
          >
            <Marker coordinate={coordinates[0]} />
            <Marker coordinate={coordinates[1]} />

            <MapView.Marker.Animated
              coordinate={this.state.Origin}
              image={require("../assets/images/train.png")}
              ref={(marker) => {
                this.marker = marker;
              }}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Sandvika}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Asker}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Drammen}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Hokksund}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Vikersund}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Hønefoss}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Flå}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Nes}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Gol}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Ål}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Geilo}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Ustaoset}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Haugastøl}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Finse}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Hallingskeid}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Myrdal}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Voss}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Dale}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated
              coordinate={this.state.Arna}
              image={require("../assets/images/train.png")}
            />
            <MapView.Marker.Animated coordinate={this.state.Bergen} />

            <MapViewDirections
              origin={coordinates[0]}
              destination={coordinates[1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColor="#00957a"
              mode="TRANSIT"
            />
          </MapView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.animate()}
              style={[styles.bubble, styles.button]}
            >
              <Text>Start Reise</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

// AnimatedMarkers.propTypes = {
//   provider: ProviderPropType,
// };

MapScreen.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
});

export default MapScreen;
