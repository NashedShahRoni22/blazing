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
                  marginBottom: 10,
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                }}
              >
                <Image
                  source={Images.user}
                  style={{ height: 64, width: 64, borderRadius: 50 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat_600SemiBold",
                    marginVertical: 5
                  }}
                >
                  {item?.name}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
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
                    width: "100%",
                  }}
                  onPress={() => router.push(`/storyDetails/${item?.id}`)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 10,
                      fontFamily: "Montserrat_600SemiBold",
                    }}
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
