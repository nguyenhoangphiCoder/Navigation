import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { withNavigation } from "@react-navigation/native";
export default Login = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../../assets/image/Splash Screen (1).png")}
    >
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"} // chạy theo màn hình khi có bàn phím
          style={{ flex: 1, marginTop: 220 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* email and password  */}
            <View
              style={{
                width: "70%",
                marginTop: 150,
              }}
            >
              {/* email */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    paddingTop: 20,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Email
                </Text>
                <TextInput
                  style={{
                    height: "100%",
                    width: "70%",
                    borderBottomColor: "#fff",
                    borderBottomWidth: 1,
                    textAlign: "right",
                    color: "#fff",
                  }}
                />
              </View>
              {/* password */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    paddingTop: 20,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Password
                </Text>
                <TextInput
                  style={{
                    height: "100%",
                    width: "70%",
                    borderBottomColor: "#fff",
                    borderBottomWidth: 1,
                    textAlign: "right",
                    color: "#fff",
                  }}
                />
              </View>
            </View>

            {/* button login */}
            <View
              style={{
                width: "100%",
                height: "20%",
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#fff",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  width: 200,
                  height: 50,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("Home"); //navigation
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: "#fff",

                    fontWeight: "600",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  width: 200,
                  height: 50,
                  borderRadius: 20,
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: "#fff",

                    fontWeight: "600",
                  }}
                >
                  Log out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};
