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
