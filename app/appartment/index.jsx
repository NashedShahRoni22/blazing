import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const index = () => {
  const DATA = [
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
    },
    {
      title: "3 bed flat to rent",
      location: "NSW, Australlia",
      price: 5750,
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
                alignItems:"flex-end",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              }}
            >
              <View>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  {item.title}
                </Text>
                <Text style={{ color: "#808080", marginVertical: 5 }}>
                  {item.location}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  ${item.price}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: "#FF6347", // primary color
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
                  View Details
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
