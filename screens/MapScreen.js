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
  },
  {

  }
];


const GOOGLE_MAPS_APIKEY = "AIzaSyB3ReUNZCJIJnlpNT-1UchzSaX5gpJdGT0";

class MapScreen extends React.Component{

 constructor(props) {
    super(props);

    this.state = {
      Origin: new AnimatedRegion({
        latitude: 59.911491,
        longitude:10.757933,
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
        longitude: 10.204860,
        latitudeDelta: 0,
        longitudeDelta: 0
      })
    
    };


   }

   animate() {
    //  console.log(this.state.coordinate1);
    //  console.log(this.state.coordinate2);
     const coordinate1 = this.state.Origin;
     const coordinate2 = this.state.Asker;

     const coordinate3 = this.state.Drammen;
     const newCoordinate =[{
      latitude: 59.834079,
      longitude: 10.435004,
      latitudeDelta: 0,
      longitudeDelta: 0,
      duration: 5000,
     },
     {
      latitude: 59.740068,
      longitude: 10.204860,
      latitudeDelta: 0,
      longitudeDelta: 0,
      duration: 5000,
      delay: 5000
      
     },{
      latitude: 59.767305,
      longitude: 9.910776,
      latitudeDelta: 0,
      longitudeDelta: 0,
      duration: 5000,
      delay: 10000
     }
    ]

     coordinate1.timing(newCoordinate[0]).start();

     coordinate2.timing(newCoordinate[1]).start();

     coordinate3.timing(newCoordinate[2]).start();
       
       
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
        coordinate={this.state.Origin}
      /> 
      <MapView.Marker.Animated 
        coordinate={this.state.Asker}
      />
      <MapView.Marker.Animated 
        coordinate={this.state.Drammen}
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
