import React, { Component } from 'react';
import { Text, View, Switch, Image } from 'react-native'



export default function TicketScreen() {

    
        return (
 <View class="container">
    <View class="text-container">
       <Text class="desc-text">Skru på varsling 10 minutter</Text>
       <Text>før toget ankommer plattform</Text>
       <Switch class="alert-btn" :on-value-change="handleChange" :value="value" />
    </View>
    <Image
      class="ticketCode"
      style="{width: 300, height: 300}"
      source={require('../assets/ticketCode.png')}
    />
    <Text class="ticket-text">Billettnummer: 7738291</Text>
    <Text class="ticket-text">Referanse nummer: QZBN</Text>
  </View>
        );
}
    
const styles = StyleSheet.create({
    container: {
  alignItems: center,
  justify-content: center;
  flex: 1;
}
.header-text {
  position: absolute;
  top: -20;
  font-size: 30;
}
.alert-btn {
  position: absolute;
  border-radius: 50px;
  top: 20;
  right: 10;
}
.text-container {
  position: absolute;
  top: 35;
  padding: 10;
  border-width: 3;
  border-color: #00957a;
  border-radius: 15;
  width: 350;
}
.ticketCode {
  position: absolute;
  top: 150;
}
.ticket-text {
  position: relative;
  top: 190;
  padding: 10;
}
})


export default TicketScreen;