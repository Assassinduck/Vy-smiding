
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";

class HomeScreen extends Component {
    state = {}
    



    render() {

        return (
          <template>
            <view style={styles.container}>
              <ScrollView>
                <view style={styles.ticketHeader}>
                  <image
                    style={styles.logo}
                    source={require("../assets/images/vy.logo.final_primary.png")}
                  />
                  <text style={styles.headerText}>
                    Du vil finne dine reiser og billetter her.
                  </text>
                </view>
                <view style={styles.head}>
                  <text style={styles.ticketText}>Dine Billetter</text>
                </view>
                <view style={styles.ticket}>
                  <text style={styles.travelText}>Oslo til Bergen</text>
                  <text style={styles.ticketText}>Platform 1</text>
                  <text style={styles.ticketText}>Avreise kl.12.45</text>
                  <TouchableOpacity style={styles.ticketButton} title="Button">
                    <button
                      style={styles.button}
                      title="Se informasjon om reisen"
                      color="#00957a"
                      onPress={goToInformation}
                    />
                  </TouchableOpacity>
                </view>
                <view style={styles.ticket}>
                  <text style={styles.travelText}>Oslo til Trondheim</text>
                  <text style={styles.ticketText}>Platform 7</text>
                  <text style={styles.ticketText}>Avreise kl.14.35</text>
                  <TouchableOpacity style={styles.ticketButton} title="Button">
                    <button
                      style={styles.button}
                      title="Se informasjon om reisen"
                      color="#00957a"
                      onPress={goToInformation}
                    />
                  </TouchableOpacity>
                </view>
                <view style={styles.ticket}>
                  <text style={styles.travelText}>Oslo til Hamar</text>
                  <text style={styles.ticketText}>Platform 3</text>
                  <text style={styles.ticketText}>Avreise kl.10.15</text>
                  <TouchableOpacity style="ticket-button" title="Button">
                    <button
                      style={styles.button}
                      title="Se informasjon om reisen"
                      color="#00957a"
                      onPress={goToInformation}
                    />
                  </TouchableOpacity>
                </view>
                <view style={styles.box}></view>
              </ScrollView>

              <image
                style={styles.navBar}
                source={require("../assets/navbar.jpg")}
              />
            </view>
          </template>
        );
    }
    
}
const styles = StyleSheet.create({
  container: {
    justifyContent: center,
    alignItems: center,
    position: relative,
    left: 10,
  },

  ticketHeader: {
    backgroundColor: "#f2f2f3",
    padding: 5,
    width: 94,
    marginTop: 10,
    margin: 5,
    alignItems: center,
  },
  headerText: {
    fontSize: 32,
    margin: 10,
    fontWeight: 700,
  },
  ticketText: {
    fontSize: 32,
    fontWeight: 700,
  },
  head: {
    margin: 10,
  },
  ticket: {
    backgroundColor: "#f2f2f3",
    width: 93,
    alignItems: center,
    margin: 5,
  },
  travelText: {
    fontSize: 22,
    marginTop: 5,
  },
  ticketTxt: {
    position: relative,
    marginTop: 4,
  },
  ticketButton: {
    margin: 10,
  },
  box: {
    height: 120,
    color: Colors.white,
  },
  navBar: {
    position: absolute,
    bottom: 0,
    width: 400,
    height: 81 
  },
  logo: {
    width: 70,
    height: 70,
  },
});

export default HomeScreen;