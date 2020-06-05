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
  //Renders the ticket screen
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
