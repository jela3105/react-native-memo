import React from "react";
import { View, FlatList, Text, StyleSheet, Dimensions } from "react-native";
import ranking from "../assets/ranking";

export default () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>RANKING</Text>
      </View>
      <View style={styles.categories}>
        <Text style={styles.categoriesText}>No.</Text>
        <Text style={styles.categoriesText}>Fecha</Text>
        <Text style={styles.categoriesText}>Tiempo</Text>
        <Text style={styles.categoriesText}>Errores</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={ranking}
          renderItem={({ item }) => <View style={styles.item}></View>}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    alignItems: "center",
  },
  list: {
    height: Dimensions.get("window").height - 300,
    backgroundColor: "#EEEEEE",
  },
  headerText: {
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
  },
  categories: {
    height: 50,
    flexDirection: "row",
    padding: 2,
  },
  categoriesText: {
    margin: 10,
    fontSize: 18,
  },
});
