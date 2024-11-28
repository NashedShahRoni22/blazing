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
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

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
      title: "Properties",
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
      title: "FAQ",
    },
    {
      image: Images.about,
      title: "About Blazing",
    },
  ];

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#9D1F31", // primary color
            height: "30%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <Image source={Images.logo} style={{ height: 80, width: 240 }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 30,
            height: '50%'
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
              <Image source={data.image} style={{ height: 48, width: 48 }} />
              <Text
                style={{
                  fontFamily: "Montserrat_600SemiBold",
                  fontSize: 12,
                  lineHeight: 18,
                  textAlign: "center",
                }}
              >
                {data.title}
              </Text>
            </View>
          ))}
        </View>
        <View style={{ paddingHorizontal: 30, height: '20%' }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: "#9D1F31", // primary color
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
                  fontSize: 18,
                  fontFamily: "Montserrat_600SemiBold",
                  letterSpacing: 1
              }}
            >
              Tap to continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

export default index;
