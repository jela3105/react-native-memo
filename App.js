import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Platform,
  AlertIOS,
} from "react-native";
import { Modal, Cards } from "./components";
import cardsFile from "./assets/cards";

let selectedCards = new Array();

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [cards, setCards] = useState(cardsFile.sort(() => Math.random() - 0.5));
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
        showMessage("Felicidades, son iguales");
        selectedCards = [];
      } else {
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
      console.log("no son iguales :c");
      selectedCards = [];
    }, 800);
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
        <Text>Open up App.js to start working on your app!</Text>
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
    fontSize: 16,
  },
});
