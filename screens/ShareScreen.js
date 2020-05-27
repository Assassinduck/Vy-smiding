
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    Button,
    Linking,
  Alert
} from "react-native";
//import * as Link from "expo-linking";
import * as SMS from "expo-sms";





class ShareScreen extends Component {
  state = {
    VyMessage:
      "Hei, trykk på denne linken: https://www.youtube.com/watch?v=dQw4w9WgXcQ for å se hvor jeg er på reisa",
    phoneNum: "95839305",
    smsAvailable: undefined,
  };
  

  OpenSmS = async () => {
    console.log("fgwaad");
    const isAvailableAsync = await SMS.isAvailableAsync();
    if (isAvailableAsync) {
      this.setState({
        smsAvailable: false,
      });
      const message = SMS.sendSMSAsync(
        this.state.phoneNum,
        this.state.VyMessage
      );
      console.log(isAvailableAsync);
    } else {
    }
    const message = SMS.sendSMSAsync(this.state.phoneNum, this.state.VyMessage);
    console.log(message);
  };

    OpenFacebookMessanger = async () => {
    Linking.openURL("mailto://support@expo.io");
  };
  
   OpenMail = async () => {
    Linking.openURL('mailto:?subject=Delt reise&body=Hei, trykk på denne linken: https://www.youtube.com/watch?v=dQw4w9WgXcQ for å se hvor jeg er på reisen');
  };
  

  componentDidMount = async () => {};

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} title="Button">
          <Button
            class="button"
            title="Messenger"
            color="#00C6FF"
            onPress={() => this.OpenFacebookMessanger()}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} title="Button">
          <Button 
          class="button" 
          title="SMS" 
          color="#80046b" 
          onPress={() => this.OpenSmS()}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} title="Button">
          <Button 
          class="button" 
          title="Mail" 
          color="#ea4335" 
          onPress={() => this.OpenMail()}
          />
        </TouchableOpacity>
      </View>
    );
  }
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

 addButton: {
  margin: 10,
  justifyContent: "center",
  top: -50,
  width: 200,
  
},
 addButton1: {
  margin: 10,
  justifyContent: "center",
  top: -200,
  width: 200,
  
}

})
 
export default ShareScreen;