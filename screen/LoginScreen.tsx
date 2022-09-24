import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Center,
  Image,
  VStack,
  Text,
  HStack,
  Button,
  Link,
  Input,
  FormControl,
} from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes/Routes";

const LoginImg = require("../assets/LoginIcon.png");

interface Props {
  navigation: NativeStackNavigationProp<
    StackParamList,
    "Dashboard",
    "Register"
  >;
}

const LoginScreen = ({ navigation }: Props) => {
  return (
    <View>
      <VStack space={3} justifyContent="center" mx="6">
        <Center>
          <Image source={LoginImg} resizeMode="contain" size="2xl" />
        </Center>
        <Text fontWeight="bold" fontSize="2xl" mx="1">
          Login
        </Text>
        <VStack space={3} mt="4">
          <FormControl>
            <Input placeholder="Email" fontSize="bold" />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" fontSize="bold" type="password" />
          </FormControl>
          <Button
            colorScheme="pink"
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text fontSize="lg" color="white" bold>
              Login
            </Text>
          </Button>
          <HStack my="4" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              New user ?{" "}
            </Text>
            <Link
              _text={{
                color: "red.500",
                fontWeight: "bold",
                fontSize: "sm",
                textDecoration: "none",
              }}
              onPress={() => navigation.navigate("Register")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
