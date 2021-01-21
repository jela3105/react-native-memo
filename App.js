import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Platform,
  AlertIOS,
  TouchableOpacity,
} from "react-native";
import { Modal, Cards, Ranking } from "./components";
import cardsFile from "./assets/cards";

let selectedCards = new Array();
let pairCardsFound = 0;
let pairCardsFail = 0;
let time = 0;

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(true);
  const [cards, setCards] = useState([]);
  const numColumns = 4;

  const handleSelectedCard = (item) => {
    if (selectedCards.length != 2) {
      flipCard(item);
      validateCards();
    }
  };

  const flipCard = (item) => {
    const newCardList = cards.map((x) => {
      if (x.id == item.id) {
        if (x.show == "false") {
          x.show = "true";
          selectedCards.push(item);
        } else {
          showMessage("Elige otra carta");
        }
      }
      return x;
    });
    setCards(newCardList);
  };

  const validateCards = () => {
    if (selectedCards.length == 2) {
      if (selectedCards[0].image === selectedCards[1].image) {
        showMessage("Son iguales");
        pairCardsFound++;
        if (pairCardsFound === 14) {
          setModalVisibility(true);
        }
        selectedCards = [];
      } else {
        pairCardsFail++;
        hideCards();
      }
    }
  };

  const hideCards = () => {
    setTimeout(() => {
      setCards(
        cards.map((x) => {
          if (x.id == selectedCards[0].id || x.id == selectedCards[1].id) {
            x.show = "false";
          }
          return x;
        })
      );
      showMessage("No son iguales");
      selectedCards = [];
    }, 800);
  };

  const startGame = () => {
    pairCardsFound = 0;
    pairCardsFail = 0;
    time = 0;
    setModalVisibility(false);
    setCards(cardsFile.sort(() => Math.random() - 0.5));
    cards.map((x) => {
      x.show = "false";
    });
    setInterval(() => {
      time++;
    }, 1000);
  };

  const showMessage = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(message);
    }
  };

  return (
    <View style={styles.container}>
      <Cards
        cardsList={cards}
        numColumns={numColumns}
        handleSelectedCard={handleSelectedCard}
      />
      <StatusBar style="auto" />
      <Modal visibility={modalVisibility}>
        {/*
	 <Text>Contrads you found the {pairCardsFound} pairs of cards</Text>
        <Text>You fail {pairCardsFail} times</Text>
        <Text>Time {time} </Text>   
	    * */}
        <Ranking />
        <TouchableOpacity style={styles.start} onPress={startGame}>
          <Text style={styles.text}>Presiona aquí para jugar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#111111",
  },
  text: {
    color: "#EEEEEE",
    fontSize: 20,
    fontWeight: "bold",
  },
  start: {
    backgroundColor: "#008f39",
    borderRadius: 5,
    padding: 20,
    margin: 10,
    alignItems: "center",
  },
});
