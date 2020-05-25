import React, { Component, useState } from 'react';
import {
    Text, View, Switch, Image, StyleSheet} from 'react-native'



export default function TicketScreen() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    
        return (
 <View style={styles.container}>
    <View style={styles.textContainer}>
       <Text>Skru på varsling 10 minutter</Text>
       <Text>før toget ankommer plattform</Text>
       <Switch style={styles.alertBtn} onPress={toggleSwitch} value={isEnabled} />
    </View>
    <Image
      style={styles.ticketCode}
      source={require('../assets/images/ticketCode.png')}
    />
    <Text style={styles.ticketText}>Billettnummer: 7738291</Text>
    <Text style={styles.ticketText}>Referanse nummer: QZBN</Text>
  </View>
        );
}
    
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


