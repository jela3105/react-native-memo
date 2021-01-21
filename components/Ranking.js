import React from "react";
import { View, FlatList, Text, StyleSheet, Dimensions } from "react-native";

export default () => {
  return (
    <>
      <View style={styles.list}>
        <Text>Here goes the ranking</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 300,
  },
});
