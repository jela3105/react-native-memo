import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Modal, Cards } from "./components";
import cardsFile from "./assets/cards";

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [cards, setCards] = useState(cardsFile.sort(() => Math.random() - 0.5));
  const numColumns = 4;

  const handleSelectedCard = (item) => {
    console.log(cards);
    const modifiedCards = cards.map((x) => {
      if (x.id == item.id) {
        x.show = "true";
        console.log(`el modificado es ${x}`);
      }
      return x;
    });
    console.log(modifiedCards);
    setCards(modifiedCards);
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
