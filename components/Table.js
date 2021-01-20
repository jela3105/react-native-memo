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
  //cardsList.map((x) => console.log(typeof x.show));
  return (
    <FlatList
      data={cardsList}
      renderItem={({ item }) => (
        <View style={styles.itemStyle}>
          <Image
            style={styles.photo}
            source={
              item.show == "true"
                ? { uri: item.image }
                : require("../assets/hola-mundo.jpg")
            }
          />
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
    borderRadius: 6,
  },
  title: { color: "#000000" },
  photo: {
    width: "100%",
    height: "100%",
  },
});
//{ uri: item.image }
