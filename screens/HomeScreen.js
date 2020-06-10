import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export default function HomeScreen({ navigation }) {
  //Renders the home screen
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
          <Text style={styles.descTravelText}>Platform 1</Text>
          <Text style={styles.descTravelText}>Avreise kl.12.45</Text>
          <TouchableOpacity style={styles.ticketButton} title="Button">
            <Button
              style={styles.button}
              title="Se informasjon om reisen"
              color="#00957a"
              onPress={() => navigation.navigate("Reiseinformasjon")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ticket}>
          <Text style={styles.travelText}>Oslo til Trondheim</Text>
          <Text style={styles.descTravelText}>Platform 7</Text>
          <Text style={styles.descTravelText}>Avreise kl.14.35</Text>
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
          <Text style={styles.descTravelText}>Platform 3</Text>
          <Text style={styles.descTravelText}>Avreise kl.10.15</Text>
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
    width: "100%",
    backgroundColor: "white",
  },
  scrollView: {
    width: "100%",
  },
  ticketHeader: {
    backgroundColor: "#f2f2f3",
    padding: 5,
    width: 94,
    marginTop: 10,
    margin: 5,
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 32,
    margin: 10,
    fontWeight: "700",
  },
  ticketText: {
    fontSize: 32,
    fontWeight: "700",
    left: "25%",
  },
  head: {
    margin: 10,
    width: "100%",
  },
  ticket: {
    backgroundColor: "#f2f2f3",
    width: 93,
    alignItems: "center",
    margin: 5,
    width: "100%",
  },
  travelText: {
    fontSize: 22,
    marginTop: 5,
  },
  ticketTxt: {
    position: "relative",
    marginTop: 4,
  },
  descTravelText: {
    fontSize: 16,
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
