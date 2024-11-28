import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.white,
      tabBarInactiveTintColor:Colors.white,
      tabBarStyle: {
        height: 80,
        backgroundColor: Colors.primary,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: "Montserrat_600SemiBold",
        marginTop: 1
      },
      
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => ( 
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          tabBarLabel: "Support",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
