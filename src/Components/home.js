import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login"); //navigation
          }}
        >
          <Text style={{ fontSize: 20, padding: 15, fontWeight: "600" }}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Setting"); //navigation
          }}
        >
          <Text style={{ fontSize: 20, padding: 15, fontWeight: "600" }}>
            Setting
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 30, fontWeight: "600", paddingVertical: 100 }}>
          Home Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "30%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
  },
});
