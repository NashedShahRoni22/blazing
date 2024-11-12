import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Images from "../constants/Images";
import { router } from "expo-router";

const index = () => {
  const DATA = [
    {
      image: Images.visa,
      title: "Visa Service",
    },
    {
      image: Images.ticket,
      title: "Air Ticket",
    },
    {
      image: Images.house,
      title: "Appartment",
    },
    {
      image: Images.job,
      title: "Job Board",
    },
    {
      image: Images.fair,
      title: "Blazing Fair",
    },
    {
      image: Images.success,
      title: "Success Story",
    },
    {
      image: Images.referral,
      title: "Referral",
    },
    {
      image: Images.faq,
      title: "Faq",
    },
    {
      image: Images.about,
      title: "About Blazing",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#E53935", // primary color
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image source={Images.logo} style={{ height: 80, width: 220 }} />
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            marginTop: 54,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {DATA.map((data, index) => (
            <View
              key={index}
              style={{
                width: "30%",
                marginBottom: 16,
                alignItems: "center",
                gap: 4,
              }}
            >
              <Image source={data.image} style={{ height: 64, width: 64 }} />
              <Text style={{ fontSize: 16 }}>{data.title}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginTop: 36,
            backgroundColor: "#E53935", // primary color
            height: 56,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}
          onPress={() => router.push("/login")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Tap to continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
