import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import SplashScreen from "../../components/SplashScreen";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const index = () => {
  const url = "https://nw71.tv/api/v1/faqs?type=fair";
  const [loader, setLoader] = useState(true);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setFaqs(data?.data);
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
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: "#9D1F31",
          height: 56,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          marginBottom:10,
        }}
        onPress={() => router.push("/fairList")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "Montserrat_600SemiBold",
            letterSpacing: 1,
          }}
        >
          Fair List
        </Text>
      </TouchableOpacity>
      {loader ? (
        <SplashScreen />
      ) : (
        <FlatList
          data={faqs}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  padding: 15,
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
                onPress={() => router.push(`/faqDetails/${item?.id}`)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat_600SemiBold",
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  {item?.title}
                </Text>
                <View>
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
