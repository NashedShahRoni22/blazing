import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.white,
      tabBarInactiveTintColor:Colors.white,
      tabBarStyle: {
        height: 74,
        backgroundColor: Colors.primary,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10,
      },
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => ( 
            <Ionicons name="home-outline" size={28} color={color} />
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
              size={28}
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
            <FontAwesome5 name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
