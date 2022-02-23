import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import cards which will be an array of objects i think
import cards from './cards'

export default function App() {
  // state variable to store selected cards
  // console.log(cards.length);

  // function to randomly choose cards which will be stored in state variable
  // if card was already chosen, choose another card

  return (
    // pressable for card choosing which will call card choosing function
    <View style={styles.container}>
      {/* display cards once state variable changes */}
      <Text>hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
