import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "../constants/Colors";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="visa/index"
        options={{
          headerTitle: "Visa Services",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="appartment/index"
        options={{
          headerTitle: "Appartment",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="story/index"
        options={{
          headerTitle: "Success Story",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="job/index"
        options={{
          headerTitle: "Job Board",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="coming_soon"
        options={{
          headerTitle: "Coming Soon",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
