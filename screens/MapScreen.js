import React, { Component, useState } from "react";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {Text, View, Switch, Image, StyleSheet, TouchableOpacity, Button,
} from "react-native";
import {  
  ProviderPropType,
  Marker,
  AnimatedRegion } from "react-native-maps";

const coordinates = [
  {
    latitude: 59.911491,
    longitude: 10.757933,
  },
  {
    latitude: 60.390022,
    longitude: 5.334514,
  }
];


const GOOGLE_MAPS_APIKEY = "AIzaSyB3ReUNZCJIJnlpNT-1UchzSaX5gpJdGT0";

class MapScreen extends React.Component{

 constructor(props) {
    super(props);

    this.state = {
      coordinate: new AnimatedRegion({
        latitude: 59.911491,
        longitude:10.757933,
        latitudeDelta: 0,
        longitudeDelta: 0,
       }),
    };
   }

   animate() {
     const { coordinate } = this.state;
     const newCoordinate = {
      latitude: 60.390022,
       longitude: 5.334514,
       latitudeDelta: 0,
       longitudeDelta: 0,
       duration: 50000,
     };

    //  if (Platform.OS === 'android') {
    //  if (this.marker) {
    //     this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
    //   }
    //  } else {
       coordinate.timing(newCoordinate).start();
    //  }
   }





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
        ref={marker => { this.marker = marker }}
        coordinate={this.state.coordinate}
      /> 

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
            <Text>Animate</Text>
          </TouchableOpacity>
        </View>
    </View>
  );

      }

      // AnimatedMarkers.propTypes = {
      //   provider: ProviderPropType,
      // };
}

MapScreen.propTypes = {
  provider: ProviderPropType,
};


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default MapScreen;
