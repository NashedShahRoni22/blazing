import { View, Text, SafeAreaView, Image, StatusBar } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const index = () => {
  const DATA = [
    {
      image: Images.business,
      title: "Visa Service",
    },
    {
      image: Images.skill,
      title: "Air Ticket",
    },
    {
      image: Images.student,
      title: "Appartment",
    },
    {
      image: Images.tourist,
      title: "Job Board",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        {DATA.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: "30%",
              marginBottom: 16,
              alignItems: "center",
              justifyContent:"center",
              gap: 4,
            }}
            // onPress={() => router.push(`${data?.link}`)}
          >
            <Image source={data.image} style={{ height: 64, width: 64 }} />
            <Text style={{ fontSize: 16 }}>{data.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default index;
