
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    Button,
    Linking,
  Alert,
  TextInput
} from "react-native";

import * as SMS from "expo-sms";






class ShareScreen extends Component {
  state = {
    VyMessage:
      "Hei, trykk på denne linken:https://www.youtube.com/watch?v=dQw4w9WgXcQ for å se hvor jeg er på reisa",
    phoneNum: "95839305",
    smsAvailable: undefined,
    inputSmsBoolean: false
  };
  

  OpenSmS = async () => {
    console.log("fgwaad");
    if (this.state.smsAvailable) {
      const message = SMS.sendSMSAsync(
        this.state.phoneNum,
        this.state.VyMessage
      );
    }
  }

  renderInputField = () => {
    console.log("hello");
    this.setState({ inputSmsBoolean: true })
  }

  setPhoneNum = (phoneNumber) => {
    console.log(phoneNumber);
    this.setState({ phoneNum: phoneNumber });
    console.log(this.state.phoneNum)
  }


    OpenFacebookMessanger = async () => {
    Linking.openURL('http://m.me?body=hei');
  };
  
   OpenMail = async () => {
    Linking.openURL('mailto:?subject=Delt reise&body=Hei, trykk på denne linken: https://www.youtube.com/watch?v=dQw4w9WgXcQ for å se hvor jeg er på reisen');
  };
  

 
  componentDidUpdate() {
    console.log(this.state.inputSmsBoolean)
  }



  componentDidMount = async () => {
    const isAvailableAsync = await SMS.isAvailableAsync();
    if (isAvailableAsync) {
      this.setState({
        smsAvailable: true,
      });
    };
  }


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
          {this.state.smsAvailable && (
            <Button
              class="button"
              title="SMS"
              color="#80046b"
              onPress={() => this.OpenSmS()}
            />
          )}
          {this.state.inputSmsBoolean && (
            <TextInput
              onSubmitEditing={(text) => this.setPhoneNum(text)}
            ></TextInput>
          )}
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