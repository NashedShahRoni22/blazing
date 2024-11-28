import React from "react";
import { Stack } from "expo-router";
import Colors from "../constants/Colors";


// Define the configuration for your screens
const screenOptions = {
  headerStyle: { backgroundColor: Colors.primary },
  headerTintColor: 'white',
};

const screens = [
  { name: 'visa/index', headerTitle: 'Visa Services' },
  { name: 'country/[id]', headerTitle: 'Countries' },
  { name: 'university/[visa_id]/[id]', headerTitle: 'Universities' },
  { name: 'universityDetails/[id]', headerTitle: 'University Details' },
  { name: 'appartment/index', headerTitle: 'Properties' },
  { name: 'appartmentDetails/[id]', headerTitle: 'Property Details' },
  { name: 'story/index', headerTitle: 'Success Story' },
  { name: 'storyDetails/[id]', headerTitle: 'Story Details' },
  { name: 'job/index', headerTitle: 'Job Board' },
  { name: 'jobDetails/[id]', headerTitle: 'Job Details' },
  { name: 'ticket/index', headerTitle: 'Air Ticket' },
  { name: 'about/index', headerTitle: 'About Blazing' },
  { name: 'mentors/index', headerTitle: 'Our Mentors' },
  { name: 'mentorsDetails/[id]', headerTitle: 'Mentor Details' },
  { name: 'faq/index', headerTitle: 'FAQ' },
  { name: 'faqDetails/[id]', headerTitle: 'FAQ Details' },
  { name: 'referral/index', headerTitle: 'Referral' },
  { name: 'wallet/index', headerTitle: 'Wallet' },
  { name: 'transection/index', headerTitle: 'Transection History' },
  { name: 'transfer/index', headerTitle: 'Transfer Balance' },
  { name: 'withdraw/index', headerTitle: 'Withdraw Balance' },
  { name: 'coming_soon', headerTitle: 'Coming Soon' },
];

// Your main Stack screen component
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Map through screens and apply dynamic options */}
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={{
            headerTitle: screen.headerTitle,
            ...screenOptions, // Spread the common options
            headerTitleAlign: 'center', // You can add headerTitleAlign globally
            headerTitleStyle: {
              fontFamily: "Montserrat_500Medium",
              fontSize: 16,
            },
          }}
        />
      ))}
    </Stack>
  );
}
