import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import SplashScreen from "../../components/SplashScreen";

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
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              }}
            >
              <View>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  {item?.title}
                </Text>
                <Text style={{ color: "#808080", marginVertical: 5 }}>
                  {item?.area}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  ${item?.price}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: "#FF6347",
                  height: 25,
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
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: "600",
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default Index;
