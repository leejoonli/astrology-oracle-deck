import { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ImageBackground, Animated, Image, Modal } from 'react-native';
import cards from './cards';
// got the card back from this link
// https://www.freepik.com/free-vector/hand-drawn-mystical-tarot-mobile-wallpaper_21862422.htm#query=tarot%20cards&position=5&from_view=keyword
import card_back from './img/cardback.jpg';
// got the app background from this link
// https://www.pinterest.com/pin/dump-of-images-that-could-be-used-as-phone-wallpapers-36--775463629566722000/
import starry_background from './img/starrybackground.jpg';

export default function App() {
  // interface for typings
  interface Card {
    name: string,
    tag: string,
    meaning: string,
    card_face: any,
  }

  // state variable to store selected cards
  const [spread, setSpread] = useState<Array<Card>>();
  // state variable to track single card to display
  const [single, setSingle] = useState<Card>();
  // state variable to track modal open and close
  const [modal, setModal] = useState<Boolean>(false);

  // random number generator
  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  function randomIntFromInterval(): number {
    return Math.floor(Math.random() * (44));
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

  // function to display card meaning
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
      <Image source={starry_background} resizeMode="cover" style={styles.containerBackground} />
      <View style={styles.fanContainer}>
        <Pressable onPress={selectCards} style={styles.pressable}>
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
          <Image source={card_back} style={styles.image} />
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
                    onPress={() => {
                      setSingle(element);
                      reading();
                    }}>
                    <Image source={element.card_face} style={styles.image} />
                  </Pressable>
                );
              })}
            </View>
          </>
        )}
      </View>
      {modal && (
        <>
          <View>
            <Modal
              animationType='fade'
              transparent={false}
              onRequestClose={() => {
                setModal(!modal)
              }}
            >
              {spread && (
                <View style={styles.modal}>
                  <Image source={starry_background} resizeMode="cover" style={styles.containerBackground} />
                  <Image source={single?.card_face} style={styles.cardImg} />
                  <Text style={styles.cardName}>{single?.name}</Text>
                  <Text style={styles.cardTag}>{single?.tag}</Text>
                  <Text style={styles.cardText}>{single?.meaning}</Text>
                </View>
              )}
              <Pressable onPress={() => setModal(!modal)} style={styles.closeModal}><Text style={{ color: 'white' }}>Close</Text></Pressable>
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
  containerBackground: {
    zIndex: -1,
    position: 'absolute',
    opacity: .9,
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
    paddingBottom: 80,
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
    paddingTop: 80,
  },
  cardImg: {
    width: 142.5,
    height: 250,
  },
  cardName: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: 20,
    marginBottom: 20,
  },
  cardTag: {
    fontSize: 20,
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    marginBottom: 20,
  },
  cardText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    lineHeight: 20,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  text: {
    fontSize: 20,
  },
  modal: {
    padding: 30,
    // paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});
