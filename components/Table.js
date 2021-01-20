import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";

export default ({ cardsList }) => {
  console.log(cardsList);
  return (
    <FlatList
      data={cardsList}
      renderItem={({ item }) => (
        <View style={styles.itemStyle}>
          <Text style={styles.title}>{item.image}</Text>
        </View>
      )}
      keyExtractor={(item) => item}
    />
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    flex: 1,
  },
  title: { color: "#000000" },
});
