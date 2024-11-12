import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Images from "../../constants/Images";

const index = () => {
  const DATA = [
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
    {
      image: Images.user,
      title: "Nashed Shah Roni",
      location: "NSW, Australlia",
      year: "2021",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={DATA}
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
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              }}
            >
              <View style={{ flexDirection: "row", gap: 4 }}>
                {/* Image can be included if needed */}
                {/* <Image
                  source={item.image}
                  style={{ height: 64, width: 64, borderRadius: 32 }}
                /> */}
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: "#808080", marginVertical: 5 }}>
                    Move to {item.location}
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    Shift in {item.year}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: "#FF6347", // primary color (can change as needed)
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
                // onPress={() => router.push("/login")}
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
    </SafeAreaView>
  );
};

export default index;
