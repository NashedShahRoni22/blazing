import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Images from "../../constants/Images";
import { router } from "expo-router";
import SplashScreen from "../../components/SplashScreen";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const url = "https://nw71.tv/api/v1/visa-types";
  const [loader, setLoader] = useState(true);
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setVisas(data?.data);
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
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {visas.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: "48%", // Ensures 2 items per row
                marginBottom: 15, // Space between rows
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                gap: 8,
              }}
              onPress={() => router.push(`/country/${data?.id}`)}
            >
              <Image
                source={Images.student}
                style={{ height: 64, width: 64 }}
              />
              <Text style={{ fontSize: 14, textAlign: "center", fontFamily: "Montserrat_600SemiBold", }}>
                {data?.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default index;
