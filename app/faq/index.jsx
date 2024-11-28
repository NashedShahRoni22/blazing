import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import SplashScreen from "../../components/SplashScreen";
import { router } from "expo-router";

const index = () => {
  const url = "https://nw71.tv/api/v1/faqs";
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
                  padding: 20,
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginTop: 10,
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
                <Text style={{ fontSize: 16, fontFamily: "Montserrat_600SemiBold", }}>{item?.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default index;
