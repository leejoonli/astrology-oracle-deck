import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import cards from './cards'
import tarot from './DanielleTarot.png';

export default function App() {
  // state variable to store selected cards
  const [spread, setSpread] = useState<Array<Object>>();

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
    // convert the Set into an Array to map over it
    let temp: Array<number> = Array.from(set);
    // array to store card objects
    let spread: Array<Object> = [];
    // push selected cards using the temp array to spread array
    temp.forEach((element) => {
      spread.push(cards[element]);
    });
    // set state variable to spread array
    setSpread(spread);
  }

  useEffect(() => {
    shuffleArray(cards);
  }, [spread]);

  return (
    // pressable for card choosing which will call card choosing function
    <View style={styles.container}>
      {/* display cards once state variable changes */}
      {spread && (
        <>
          <View style={styles.tarot}>
            {spread.map((element, index) => {
              return (
                <View key={`${cards[index].name}-${index}`}>
                  <ImageBackground source={tarot} style={styles.image}>
                    {/* <Text>{cards[index].name}</Text> */}
                  </ImageBackground>
                </View>
              )
            })}
          </View>
        </>
      )}
      <StatusBar style="auto" />
      <Pressable onPress={selectCards} style={styles.pressable}><Text>Press me</Text></Pressable>
      {/* <View style={styles.tarot}>
        <Image style={styles.image} source={tarot} />
        <Image style={styles.image} source={tarot} />
        <Image style={styles.image} source={tarot} />
      </View> */}
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
  tarot: {
    flexDirection: 'row',
  },
  image: {
    width: 114,
    height: 200,
  },
  pressable: {
    borderWidth: 1,
    borderColor: 'red',
  }
});
