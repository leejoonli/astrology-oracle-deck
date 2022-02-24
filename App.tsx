import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import cards from './cards'

export default function App() {
  // state variable to store selected cards
  // console.log(cards.length);

  // function to randomly choose cards which will be stored in state variable
  // if card was already chosen, choose another card
  const [state, setState] = useState<number>();

  function randomIntFromInterval() { // min and max included 
    setState(Math.floor(Math.random() * (44 - 1 + 1) + 1));
  }

  useEffect(() => {

  }, [state])

  return (
    // pressable for card choosing which will call card choosing function
    <View style={styles.container}>
      {/* display cards once state variable changes */}
      <Text>{state}</Text>
      <StatusBar style="auto" />
      <Pressable onPress={randomIntFromInterval}><Text>Press me</Text></Pressable>
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
