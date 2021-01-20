import React from "react";
import { StyleSheet, View, Text, Button, FlatList, Image } from "react-native";

export default ({ cardsList, numColumns }) => {
  console.log(cardsList);
  return (
    <FlatList
      data={cardsList}
      renderItem={({ item }) => (
        <View style={styles.itemStyle}>
          <Image style={styles.photo} source={{ uri: item.image }} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    flex: 1,
    margin: 8,
    borderRadius: 10,
  },
  title: { color: "#000000" },
  photo: {
    height: 80,
    width: 80,
  },
});
