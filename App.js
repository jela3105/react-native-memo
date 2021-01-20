import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Modal, Table } from "./components";

export default function App() {
  const [cardsList, setCardsList] = useState([
    {
      key: 0,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 1,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 2,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 3,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 4,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 5,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 6,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 7,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 0,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 1,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 2,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 3,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 4,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 5,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 6,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 7,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 0,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 1,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 2,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 3,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 4,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 5,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 6,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 7,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 0,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 1,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 2,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
    {
      key: 3,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    },
  ]);

  const [initialModalVisibility, setInitialModalVisibility] = useState(false);
  const [cards, setCards] = useState([]);

  const shortCards = (cards) => {
    console.log(cards);
    return {
      key: 3,
      image: "https://image.flaticon.com/icons/png/512/919/919826.png",
    };
  };

  useEffect(() => {
    fetch("./assets/cards.json")
      .then((response) => response.json)
      .then((cards) => {
        setCards(shortCards(cards));
      });
  }, []);

  const numColumns = 4;

  return (
    <View style={styles.container}>
      <Table cardsList={cardsList} numColumns={numColumns} />
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
