
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

class ShareScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
   <View style={styles.container}>
      
    <TouchableOpacity style={styles.addButton} title="Button" >
      <Button class="button"
       title="Messenger"
        color="#00C6FF"
        />
    </TouchableOpacity>

    <TouchableOpacity style={styles.addButton} title="Button" >
      <Button class="button"
        title="SMS"
        color="#00957A"
        />
    </TouchableOpacity>

    <TouchableOpacity  style={styles.addButton} title="Button" >
      <Button class="button"
        title="Mail"
        color="#B6B6B6"
        />
    </TouchableOpacity>
    
 </View> );
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