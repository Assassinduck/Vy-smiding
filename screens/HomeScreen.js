import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ticketHeader}>
          <Image
            style={styles.logo}
            source={require("../assets/images/vy.logo.final_primary.png")}
          />
          <Text style={styles.headerText}>
            Du vil finne dine reiser og billetter her.
          </Text>
        </View>
        <View style={styles.head}>
          <Text style={styles.ticketText}>Dine Billetter</Text>
        </View>
        <View style={styles.ticket}>
          <Text style={styles.travelText}>Oslo til Bergen</Text>
          <Text style={styles.ticketText}>Platform 1</Text>
          <Text style={styles.ticketText}>Avreise kl.12.45</Text>
          <TouchableOpacity style={styles.ticketButton} title="Button">
            <Button
              style={styles.button}
              title="Se informasjon om reisen"
              color="#00957a"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ticket}>
          <Text style={styles.travelText}>Oslo til Trondheim</Text>
          <Text style={styles.ticketText}>Platform 7</Text>
          <Text style={styles.ticketText}>Avreise kl.14.35</Text>
          <TouchableOpacity style={styles.ticketButton} title="Button">
            <Button
              style={styles.button}
              title="Se informasjon om reisen"
              color="#00957a"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ticket}>
          <Text style={styles.travelText}>Oslo til Hamar</Text>
          <Text style={styles.ticketText}>Platform 3</Text>
          <Text style={styles.ticketText}>Avreise kl.10.15</Text>
          <TouchableOpacity style={styles.ticketButton} title="Button">
            <Button
              style={styles.button}
              title="Se informasjon om reisen"
              color="#00957a"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}></View>
      </ScrollView>

      <Image
        style={styles.navBar}
        source={require("../assets/images/navbar.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: 10,
  },

  ticketHeader: {
    backgroundColor: "#f2f2f3",
    padding: 5,
    width: 94,
    marginTop: 10,
    margin: 5,
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    margin: 10,
    fontWeight: "700",
  },
  ticketText: {
    fontSize: 32,
    fontWeight: "700",
  },
  head: {
    margin: 10,
  },
  ticket: {
    backgroundColor: "#f2f2f3",
    width: 93,
    alignItems: "center",
    margin: 5,
  },
  travelText: {
    fontSize: 22,
    marginTop: 5,
  },
  ticketTxt: {
    position: "relative",
    marginTop: 4,
  },
  ticketButton: {
    margin: 10,
  },
  box: {
    height: 120,
    color: "#ffffff",
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    width: 400,
    height: 81,
  },
  logo: {
    width: 70,
    height: 70,
  },
});
