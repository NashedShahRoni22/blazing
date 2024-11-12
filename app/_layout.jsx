import React from "react";
import { Stack } from "expo-router";
import Colors from "../constants/Colors";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
        name="ticket/index"
        options={{
          headerTitle: "Air Ticket",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="referral/index"
        options={{
          headerTitle: "Referral",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="wallet/index"
        options={{
          headerTitle: "Wallet",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="transection/index"
        options={{
          headerTitle: "Transection History",
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
    </Stack>
  );
};

export default RootLayout;
