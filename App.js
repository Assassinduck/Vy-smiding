import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TicketScreen from "./screens/TicketScreen";

import useCachedResources from "./hooks/useCachedResources";

import LinkingConfiguration from "./navigation/LinkingConfiguration";
import TravelScreen from "./screens/TravelScreen";
import MapScreen from "./screens/MapScreen";
import shareScreen from "./screens/ShareScreen";


const Stack = createStackNavigator();

//Lets the app decompile the the base 64 encrypted data that we fetch from firebase
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}





export default function App(props) {
  const isLoadingComplete = useCachedResources();
 //Creates a stack navigation system for the app
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Mine reiser" component={HomeScreen} />
            <Stack.Screen name="Billett" component={TicketScreen} />
            <Stack.Screen name="Reiseinformasjon" component={TravelScreen} />
            <Stack.Screen name="Del din reise" component={shareScreen} />
            <Stack.Screen name="Reiseoversikt" component={MapScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
