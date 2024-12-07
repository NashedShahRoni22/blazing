import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import SplashScreen from "../../components/SplashScreen";
import { router } from "expo-router";

const index = () => {
  const faqUrl = "https://nw71.tv/api/v1/faqs?type=air_ticket";
  const [loader, setLoader] = useState(true);
  const [faqs, setFaqs] = useState([]);

  // get faq
  useEffect(() => {
    fetch(faqUrl)
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
          margin: 5,
        }}
        onPress={() => router.push("/bookTicket")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "Montserrat_600SemiBold",
            letterSpacing: 1,
          }}
        >
          Buy online
        </Text>
      </TouchableOpacity>

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
          margin: 5,
        }}
        onPress={() => router.push("/bookTicket")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "Montserrat_600SemiBold",
            letterSpacing: 1,
          }}
        >
          Buy with us
        </Text>
      </TouchableOpacity>

      {loader ? (
        <SplashScreen />
      ) : (
        <FlatList
          data={faqs}
          style={{ padding: 5 }}
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
