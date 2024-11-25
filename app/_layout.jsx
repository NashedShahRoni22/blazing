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
        name="country/[id]"
        options={{
          headerTitle: "Countries",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="university/[visa_id]/[id]"
        options={{
          headerTitle: "Universities",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="universityDetails/[id]"
        options={{
          headerTitle: "University Details",
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
        name="appartmentDetails/[id]"
        options={{
          headerTitle: "Appartment Details",
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
        name="storyDetails/[id]"
        options={{
          headerTitle: "Story Details",
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
        name="jobDetails/[id]"
        options={{
          headerTitle: "Job Details",
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
        name="about/index"
        options={{
          headerTitle: "About Blazing",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="mentors/index"
        options={{
          headerTitle: "Our Mentors",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="mentorsDetails/[id]"
        options={{
          headerTitle: "Mentor Details",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="faq/index"
        options={{
          headerTitle: "FAQ",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="faqDetails/[id]"
        options={{
          headerTitle: "FAQ Details",
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
        name="transfer/index"
        options={{
          headerTitle: "Transfer Balance",
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="withdraw/index"
        options={{
          headerTitle: "Withdraw Balance",
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
