import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import SplashScreen from "../../components/SplashScreen";
import Images from "../../constants/Images";
import { router } from "expo-router";

const index = () => {
  const url = "https://nw71.tv/api/v1/success-story";
  const [loader, setLoader] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setStories(data?.data);
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
          data={stories}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  padding: 10,
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
              >
                <View style={{ flexDirection: "row", gap: 4, alignItems:"center" }}>
                  <Image source={Images.user} style={{height:64, width:64, borderRadius:50}}/>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                      {item?.name}
                    </Text>
                    {/* <Text style={{ color: "#808080"}}>
                      {item?.details}
                    </Text> */}
                    {/* <Text style={{ fontSize: 16, fontWeight: "600" }}>
                      Shift in {item.year}
                    </Text> */}
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: "#FF6347", // primary color (can change as needed)
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
                  onPress={() => router.push(`/storyDetails/${item?.id}`)}
                >
                  <Text
                    style={{ color: "white", fontSize: 12, fontWeight: "600" }}
                  >
                    View Story
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default index;
