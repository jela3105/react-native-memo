import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Platform,
  AlertIOS,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { Modal, Cards, Ranking } from "./components";
import cardsFile from "./assets/cards";
import ranking from "./assets/ranking";

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
        pairCardsFound++;
        if (pairCardsFound === 14) {
          setModalVisibility(true);
          saveRanking();
        }
        selectedCards = [];
      } else {
        pairCardsFail++;
        hideCards();
      }
    }
  };

  const hideCards = () => {
    showMessage("No son iguales");
    setTimeout(() => {
      setCards(
        cards.map((x) => {
          if (x.id == selectedCards[0].id || x.id == selectedCards[1].id) {
            x.show = "false";
          }
          return x;
        })
      );
      selectedCards = [];
    }, 1500);
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

  const saveRanking = () => {
    ranking.map((x) => {
      x.lastplay = false;
    });
    const date = new Date();
    const newRankingData = {
      date: `${date.getHours()}:${date.getMinutes()}`,
      time: time,
      mistakes: pairCardsFail,
      lastplay: true,
    };
    ranking.push(newRankingData);
    ranking.sort((a, b) => a.time - b.time);
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
      <Appbar.Header style={styles.header}>
        <Appbar.Content style={styles.title} title="Memorama" />
        <Appbar.Content style={styles.time} title="Tiempo" subtitle="200" />
        <Appbar.Content style={styles.mistake} title="Errores" subtitle="100" />
      </Appbar.Header>
      <Cards
        cardsList={cards}
        numColumns={numColumns}
        handleSelectedCard={handleSelectedCard}
      />
      <StatusBar style="auto" />
      <Modal visibility={modalVisibility}>
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
  header: {
    height: 60,
    backgroundColor: "#222222",
  },
  title: {
    flex: 2,
  },
});
