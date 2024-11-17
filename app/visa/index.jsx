import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Images from "../../constants/Images";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import SplashScreen from "../../components/SplashScreen";

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
                width: "30%",
                marginBottom: 16,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                gap: 4,
              }}
              onPress={() => router.push(`/country/${data?.id}`)}
            >
              <Image
                source={Images.student}
                style={{ height: 64, width: 64 }}
              />
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                {data?.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default index;
