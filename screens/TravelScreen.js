import React, { Component, useState } from "react";
import {
  Text,
  View,
  Switch,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

export default function TravelScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/vy.logo.final_primary.png")}
      />

      <TouchableOpacity style={styles.addBtn} title="Button">
        <Button onPress={() => navigation.navigate("Share")} style={styles.button} title="Del din reise" color="#00957a" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addBtn} title="Button">
        <Button
          style={styles.button}
          title="Reiseinformasjon"
          color="#00957a"
          onPress={() => navigation.navigate("Map")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addBtn} title="Button">
        <Button
          style={styles.button}
          title="Din billett"
          color="#00957a"
          onPress={() => navigation.navigate("Ticket")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 100,
  },

  addBtn: {
    margin: 10,
    justifyContent: "center",
    top: -150,
    width: 200,
  },

  logo: {
    position: "relative",
    alignItems: "center",
    top: -170,
    width: 70,
    height: 70,
  },
});
