import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import cards from './cards'

export default function App() {
  // state variable to store selected cards
  // console.log(cards[0]);

  // function to randomly choose cards which will be stored in state variable
  // if card was already chosen, choose another card

  const [state, setState] = useState<number | undefined>();
  const [test, setTest] = useState<Set<number>>();

  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  function randomIntFromInterval() {
    setState(Math.floor(Math.random() * (44 - 1 + 1) + 1));
  }

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffleArray(array: Array<Object>) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    shuffleArray(cards);
    // console.log(cards[0]);
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
