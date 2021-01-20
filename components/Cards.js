import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default ({ cardsList, numColumns, handleSelectedCard }) => {
  const selectCard = (image) => (e) => {
    handleSelectedCard(image);
  };

  return (
    <FlatList
      data={cardsList}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity style={styles.itemStyle} onPress={selectCard(item)}>
            <Image
              style={styles.photo}
              source={
                item.show == "true"
                  ? { uri: item.image }
                  : require("../assets/hola-mundo.jpg")
              }
            />
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item, index) => String(index)}
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
    borderRadius: 6,
  },
});
//{ uri: item.image }
