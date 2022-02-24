import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import cards from './cards'

export default function App() {
  // console.log(cards[0]);
  // state variable to store selected cards
  const [select, setSelect] = useState<Array<number>>();
  // const [test, setTest] = useState<Set<number>>();

  // random number generator
  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  function randomIntFromInterval(): number {
    // hardcoded values because there's no user input
    return Math.floor(Math.random() * (44));
    // setState(Math.floor(Math.random() * (44)));
  }

  // shuffle cards array for more randomization
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffleArray(array: Array<Object>): void {
    for (let i: number = array.length - 1; i > 0; i--) {
      let j: number = Math.floor(Math.random() * (i + 1));
      let temp: Object = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // function to randomly choose cards which will be stored in state variable
  function selectCards(): void {
    let set: Set<number> = new Set();
    // if card was already chosen, choose another card
    while (set.size !== 3) {
      set.add(randomIntFromInterval());
    }
    let temp: Array<number> = Array.from(set);
    // console.log(temp.length)
    setSelect(temp);
  }

  useEffect(() => {
    shuffleArray(cards);
    // console.log(cards[0]);
  }, [select]);

  return (
    // pressable for card choosing which will call card choosing function
    <View style={styles.container}>
      {/* display cards once state variable changes */}
      {select && (
        <>
          {select.map((element, index) => {
            return (
              <View key={`${cards[element].name}-${index}`}>
                <Text>{cards[element].name}</Text>
              </View>
            )
          })}
        </>
      )}
      {/* <Text>{select}</Text> */}
      <StatusBar style="auto" />
      <Pressable onPress={selectCards}><Text>Press me</Text></Pressable>
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
