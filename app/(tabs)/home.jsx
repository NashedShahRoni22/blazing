import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import Images from "../../constants/Images";
import { router } from "expo-router";

const Home = () => {
  const DATA = [
    {
      image: Images.visa,
      title: "Visa Services",
      link: "visa",
    },
    {
      image: Images.ticket,
      title: "Air Ticket",
      link: "ticket",
    },
    {
      image: Images.house,
      title: "Appartment",
      link: "appartment",
    },
    {
      image: Images.job,
      title: "Job Board",
      link: "job",
    },
    {
      image: Images.fair,
      title: "Blazing Fair",
      link: "coming_soon",
    },
    {
      image: Images.success,
      title: "Success Story",
      link: "story",
    },
    {
      image: Images.referral,
      title: "Referral",
      link: "referral",
    },
    {
      image: Images.faq,
      title: "Faq",
      link: "faq",
    },
    {
      image: Images.about,
      title: "About Blazing",
      link: "about",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* header: user information */}
        <View
          style={{
            backgroundColor: "#E53935", // primary color
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 80,
            paddingBottom: 20,
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            {/* User Image */}
            <Image
              source={Images.user}
              style={{ height: 64, width: 64, borderRadius: 32 }}
            />
            <View>
              <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
                John Deo
              </Text>
              <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
                john@gmail.com
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: "white",
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              paddingHorizontal: 15,
            }}
            onPress={() => router.push("/wallet")}
          >
            <Text style={{ color: "black", fontSize: 12, fontWeight: "600" }}>
              Wallet
            </Text>
          </TouchableOpacity>
        </View>

        {/* body: features cards */}
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <Image
            source={Images.Homebanner}
            style={{ height: 150, width: "100%" }}
          />
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
                  gap: 4,
                }}
                onPress={() => router.push(`${data?.link}`)}
              >
                <Image source={data.image} style={{ height: 64, width: 64 }} />
                <Text>{data.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
