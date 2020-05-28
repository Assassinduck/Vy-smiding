
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
  TextInput,
  Share
} from "react-native";

import * as SMS from "expo-sms";




class ShareScreen extends Component {
  state = {
    VySMSMessage:
      "Hei, trykk på denne linken:https://www.youtube.com/watch?v=dQw4w9WgXcQ for å se hvor jeg er på reisa",
    phoneNum: "",
    smsAvailable: undefined,
    inputSmsBoolean: false,
  };

    onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `${this.state.VySMSMessage}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };



  componentDidUpdate() {
    console.log(this.state.inputSmsBoolean);
  }

  componentDidMount = async () => {
    const isAvailableAsync = await SMS.isAvailableAsync();
    if (isAvailableAsync) {
      this.setState({
        smsAvailable: true,
      });
    }
  };

  render() {
    return (
    
    
      <View style={styles.container}>

       <Text style={styles.descriptionText}>Ønsker du å dele reiseruten med en venn?</Text>
        <Text style={styles.descriptionText}>Send reisekoden til en bekjent, slik at de får live-oppdateringer på hvor du befinner deg på reisen.</Text>
        <Text style={styles.descriptionText}> Del din kode via:</Text>
        
      

        <TouchableOpacity style={styles.addButton} title="Button">
          <Button
            class="button"
            title="Del reisen din"
            color="#00957a"
            onPress={this.onShare}
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
descriptionText:{
top: -100,
fontSize: 16,
textAlign: "center",
margin: 10
},
 addButton: {
  margin: 10,
  justifyContent: "center",
  top: -50,
  width: 200,
  
}

})
 
export default ShareScreen;