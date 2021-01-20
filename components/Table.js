import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default ({ cardsList, numColumns }) => {
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
    borderRadius: 5,
  },
  title: { color: "#000000" },
  photo: {
    width: 80,
    height: 80,
  },
});
