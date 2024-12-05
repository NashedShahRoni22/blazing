import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Images from "../../constants/Images";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

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
      title: "Properties",
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
      link: "fair",
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
      title: "FAQ",
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
            backgroundColor: "#9D1F31",
            flexDirection: "row",
            alignItems: "center",
            paddingTop:70,
            paddingBottom:35,
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, width: '75%', overflow: 'hidden' }}>
            {/* User Image */}
            <Image
              source={Images.user}
              style={{ height: 60, width: 60, borderRadius: 30 }}
            />
            <View>
              <Text style={{ color: "white", fontSize: 14, fontFamily: "Montserrat_600SemiBold", }}>
                Mohammad Ashraf
              </Text>
              <Text style={{ color: "white", fontSize: 12, fontFamily: "Montserrat_400Regular", }}>
                mohammadashraf@gmail.com
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
            <Text style={{ color: "black", fontSize: 12, fontFamily: "Montserrat_600SemiBold" }}>
              Wallet
            </Text>
          </TouchableOpacity>
        </View>

        {/* body: features cards */}
        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
          <Image
            source={Images.Homebanner}
            style={{ height: 150, width: "100%", borderRadius: 10 }}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
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
                  marginBottom: 20,
                  alignItems: "center",
                  gap: 4,
                }}
                onPress={() => router.push(`${data?.link}`)}
              >
                <Image source={data.image} style={{ height: 48, width: 48 }} />
                <Text style={{fontFamily: "Montserrat_600SemiBold", fontSize: 12, textAlign: "center"}}>{data.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Home;
