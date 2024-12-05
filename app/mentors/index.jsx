import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import SplashScreen from "../../components/SplashScreen";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const url = "https://nw71.tv/api/v1/mentors";
  const [loader, setLoader] = useState(true);
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setMentors(data?.data);
        } else {
          console.log("Something went wrong");
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {loader ? (
        <SplashScreen />
      ) : (
        <FlatList
          data={mentors}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  padding: 20,
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginBottom: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                }}
                onPress={() => router.push(`/mentorsDetails/${item?.id}`)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat_600SemiBold",
                    width: "90%",
                  }}
                >
                  {item?.name}
                </Text>
                <View style={{ width: "6%" }}>
                  <Ionicons name="chevron-down-outline" size={24} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default index;
