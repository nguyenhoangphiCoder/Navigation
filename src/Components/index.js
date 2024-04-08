import { View, Text } from "react-native";
import React from "react";
import Home from "./home";
import Setting from "./seting";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const RootCoponent = () => {
  return (
    // <Login />
    // <Home />
    // <Setting />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer> //navigation
  );
};

export default RootCoponent;
