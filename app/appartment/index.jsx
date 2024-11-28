import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import SplashScreen from "../../components/SplashScreen";
import { router } from "expo-router";

const Index = () => {
  const url = "https://nw71.tv/api/v1/property";
  const [loader, setLoader] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setProperties(data?.data);
        } else {
          console.log("Something went wrong");
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loader ? (
        <SplashScreen />
      ) : (
        <FlatList
          style={{ padding: 10 }}
          data={properties}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
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
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontFamily: "Montserrat_600SemiBold" }}
                >
                  {item?.title}
                </Text>
                <Text
                  style={{
                    color: "#808080",
                    fontSize: 14,
                    marginVertical: 3,
                    fontFamily: "Montserrat_400Regular",
                  }}
                >
                  {item?.area}
                </Text>
                <Text
                  style={{ fontSize: 14, fontFamily: "Montserrat_600SemiBold" }}
                >
                  ${item?.price}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#9D1F31",
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 25,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  paddingHorizontal: 15,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => router.push(`/appartmentDetails/${item?.id}`)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 10,
                      fontFamily: "Montserrat_600SemiBold",
                    }}
                  >
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default Index;
