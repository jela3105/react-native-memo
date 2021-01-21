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
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{ranking.indexOf(item) + 1}</Text>
              <Text style={styles.itemText}>{item.date}</Text>
              <Text style={styles.itemText}>{item.time}</Text>
              <Text style={styles.itemText}>{item.mistakes}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
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
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    padding: 20,
  },
  headerText: {
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",
  },
  categories: {
    height: 50,
    flexDirection: "row",
    padding: 1,
  },
  categoriesText: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
  },
  itemText: {
    fontSize: 12,
    marginRight: 38,
  },
});
