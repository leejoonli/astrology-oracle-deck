import { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground, Animated, Image, Modal } from 'react-native';
import cards from './cards';
import tarot from './img/DanielleTarot.png';
import test from './img/test.jpeg';

export default function App() {
  // https://joshgoestoflatiron.medium.com/a-card-flip-animation-in-react-native-with-hooks-89af1ebd0386
  // post for flip animation using Animated from react native
  const flipAnim = useRef(new Animated.Value(0)).current;
  let flipRotation: number = 0;
  flipAnim.addListener(({ value }) => flipRotation = value);

  // flip styling
  // I don't know the typing for this
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnim.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg']
        })
      }
    ]
  }
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnim.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg']
        })
      }
    ]
  }

  // functions to flip card
  const flipToFront = (): void => {
    Animated.timing(flipAnim, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
  const flipToBack = (): void => {
    Animated.timing(flipAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  interface Card {
    name: string,
    tag: string,
    meaning: string,
  }

  // state variable to store selected cards
  const [spread, setSpread] = useState<Array<Card>>();
  const [modal, setModal] = useState<Boolean>(false);

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
    let spread: Array<Card> = [];
    // push selected cards using the temp array to spread array
    temp.forEach((element) => {
      spread.push(cards[element]);
    });
    // set state variable to spread array
    setSpread(spread);
  }

  // function to display reading
  function reading(): void {
    setModal(true);
  }

  // useEffect to "shuffle deck" whenever cards are chosen to have more randomization
  useEffect(() => {
    shuffleArray(cards);
  }, [spread]);

  return (
    // pressable for card choosing which will call card choosing function
    <View style={styles.container}>
      <View style={styles.fanContainer}>
        <Pressable onPress={selectCards} style={styles.pressable}>
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={tarot} style={styles.image} />
          <Image source={test} style={styles.image} />
        </Pressable>
      </View>
      {/* display cards once state variable changes */}
      <View style={styles.spreadContainer}>
        {spread && (
          <>
            <View style={styles.tarot}>
              {spread.map((element, index) => {
                return (
                  <Pressable
                    key={`${cards[index].name}-${index}`}
                    onPress={() => !!flipRotation ? flipToBack() : flipToFront()}>
                    <Animated.Image
                      style={{ ...styles.cardFront, ...flipToBackStyle }}
                      source={tarot} />
                    <Animated.Image
                      style={{ ...styles.cardBack, ...flipToFrontStyle }}
                      source={tarot} />
                  </Pressable>
                )
              })}
            </View>
            {/* {!!flipRotation && (<Pressable style={styles.reading} onPress={reading}><Text style={styles.text}>Display Reading</Text></Pressable>)} */}
            <Pressable style={styles.reading} onPress={reading}><Text style={styles.text}>Display Reading</Text></Pressable>
          </>
        )}
      </View>
      {modal && (
        <>
          <View>
            <Modal
              animationType='slide'
              transparent={false}
              onRequestClose={() => {
                setModal(!modal)
              }}
            >
              {spread && (
                <>
                  {spread.map((element, index) => {
                    return (
                      <View key={`${element.name}-${index}`} style={styles.modal}>
                        <Text style={styles.name}>{element.name}</Text>
                        <Text style={styles.tag}>{element.tag}</Text>
                        <Text style={styles.meaning}>{element.meaning}</Text>
                      </View>
                    )
                  })}
                </>
              )}
              <Pressable onPress={() => setModal(!modal)} style={styles.closeModal}><Text>Close Modal</Text></Pressable>
            </Modal>
          </View>
        </>
      )}
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
    // borderWidth: 1,
    // borderColor: 'red',
  },
  fanContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    width: 250,
  },
  spreadContainer: {
    flex: 1,
  },
  tarot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    width: 400,
  },
  image: {
    width: 114,
    height: 200,
  },
  pressable: {
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  cardFront: {
    position: 'absolute',
    width: 114,
    height: 200,
  },
  cardBack: {
    backfaceVisibility: 'hidden',
    width: 114,
    height: 200,
  },
  reading: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    padding: 20,
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  modal: {
    padding: 15,
  },
  name: {
    fontSize: 20,
    marginBottom: 5,
  },
  tag: {
    fontSize: 16,
    marginBottom: 5,
  },
  meaning: {
    lineHeight: 17,
  },
  closeModal: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    margin: 20,
  }
});
