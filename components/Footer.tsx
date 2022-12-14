import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, Box, Center, HStack, Pressable, Icon } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes/Routes";

interface Props {
  navigation: NativeStackNavigationProp<StackParamList, "Dashboard">;
}

const Footer = ({ navigation }: Props) => {
  const [selected, setSelected] = React.useState<number>();
  return (
    <View>
      <Box
        flex={1}
        bg="gray.200"
        safeAreaTop
        width="100%"
        maxW="100%"
        alignSelf="center"
        shadow="4"
        style={{
          shadowRadius: 4,
          elevation: 4,
          shadowColor: "grey",
          shadowOffset: { width: 0, height: -4 },
        }}
      >
        <Center flex={1}></Center>
        <HStack alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => {
              setSelected(0);
              navigation.navigate("Dashboard");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={
                      selected === 0
                        ? "clipboard-text-multiple"
                        : "clipboard-text-multiple-outline"
                    }
                  />
                }
                color="red.400"
                size="lg"
              />
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(1);
              navigation.navigate("Dashboard");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <Ionicons
                    name={
                      selected === 1 ? "add-circle-sharp" : "add-circle-outline"
                    }
                  />
                }
                color="red.400"
                size="lg"
              />
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(2);
              navigation.navigate("Dashboard");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <Ionicons
                    name={selected === 2 ? "duplicate" : "duplicate-outline"}
                  />
                }
                color="red.400"
                size="xl"
              />
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
