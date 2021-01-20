import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Modal, Table } from "./components";
import cardsFile from "./assets/cards";

export default function App() {
  const [initialModalVisibility, setInitialModalVisibility] = useState(false);
  const [cards, setCards] = useState([]);

  const shortCards = (cards) => {
    return [
      {
        key: 3,
        image: "https://image.flaticon.com/icons/png/512/919/919826.png",
      },
    ];
  };

  useEffect(() => {
    setCards(cardsFile);
  }, []);

  const numColumns = 4;

  return (
    <View style={styles.container}>
      <Table cardsList={cards} numColumns={numColumns} />
      <StatusBar style="auto" />
      <Modal visibility={initialModalVisibility}>
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
