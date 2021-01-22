import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default ({ timer, mistakes }) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content style={styles.title} title="Memorama" />
      <Appbar.Content title="Tiempo" subtitle={timer} />
      <Appbar.Content title="Errores" subtitle={mistakes} />
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#222222",
  },
  title: {
    flex: 2,
  },
});
