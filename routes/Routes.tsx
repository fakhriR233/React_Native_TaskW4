import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screen/LoginScreen";
import HomeScreen from "../screen/HomeScreen";
import RegisterScreen from "../screen/RegisterScreen";
import Dashboard from "../screen/Dashboard";
import AddCategoryScreen from "../screen/AddCategoryScreen";
import MyTabs from "./TabRoutes";
import DetailTodo from "../screen/DetailTodo";

interface RoutesProps {}

export type StackParamList = {
  Login:
    | {
        email: string;
        password: string;
      }
    | undefined;
  Register: undefined;
  Dashboard: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator();

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={MyTabs} />
        <Stack.Screen name="Add Category" component={AddCategoryScreen} />
        <Stack.Screen name="Detail" component={DetailTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
