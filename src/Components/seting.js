import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

const Setting = ({ navigation }) => {
  //navigation
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home"); //navigation
          }}
        >
          <Text style={{ fontSize: 20, padding: 15, fontWeight: "600" }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 30, fontWeight: "600", paddingVertical: 100 }}>
          Home Screen
        </Text>
        <TouchableOpacity
          style={{
            width: 150,
            height: 60,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "black",
          }}
          onPress={() => {
            navigation.navigate("Login"); //navigation
          }}
        >
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              fontWeight: "600",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Setting;

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
