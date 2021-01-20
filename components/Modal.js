import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

export default ({ visibility }) => {
  return (
    <Modal transparent={true} animationType={"slide"} visible={visibility}>
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    minWidth: Dimensions.get("window").width - 100,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
