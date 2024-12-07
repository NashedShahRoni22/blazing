import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Images from "../../constants/Images";
import { router } from "expo-router";
import SplashScreen from "../../components/SplashScreen";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const index = () => {
  const url = "https://nw71.tv/api/v1/visa-types";
  const faqUrl = "https://nw71.tv/api/v1/faqs?type=visa";
  const [loader, setLoader] = useState(true);
  const [faqs, setFaqs] = useState([]);
  const [visas, setVisas] = useState([]);
  
  // get visa
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
      {loader ? (
        <SplashScreen />
      ) : (
        <>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            {visas.map((data, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "48%", 
                  marginBottom: 15, 
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
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  {data?.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

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
        </>
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#E0E0E0",
  },
  selectedButton: {
    backgroundColor: "#9D1F31",
  },
  buttonText: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Montserrat_600SemiBold",
  },
  selectedText: {
    color: "#fff",
  },
});

export default index;
