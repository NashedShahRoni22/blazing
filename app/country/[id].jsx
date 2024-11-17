import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import Images from "../../constants/Images";
import SplashScreen from "../../components/SplashScreen";
const country = () => {
  const { id } = useLocalSearchParams();
  const url = `https://nw71.tv/api/v1/visa-countries/${id}`;
  const [loader, setLoader] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setCountries(data?.data);
        } else {
          console.log("Something went wrong");
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {loader ? (
        <SplashScreen />
      ) : (
        <FlatList
          data={countries}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  alignItems: "center",
                  borderRadius: 10,
                  marginBottom: 10,
                  backgroundColor:"white",
                  shadowColor: "#000",
                  flexDirection:"row",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  padding: 10,
                  gap:4,
                }}
                onPress={() => router.push(`/university/${item?.visa_id}/${item?.id}`)}
              >
                <Image source={Images?.country} style={{height:48, width:48}} />
                <Text
                  style={{ fontSize: 18, fontWeight: "600" }}
                >
                  {item?.country_name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default country;
