import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import SplashScreen from "../../components/SplashScreen";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const url = "https://nw71.tv/api/v1/fairs";
  const [loader, setLoader] = useState(true);
  const [fairs, setFairs] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setFairs(data?.data);
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
          style={styles.flatList}
          data={fairs}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.propertyCard}>
                <View>
                  <Text style={styles.propertyTitle}>{item?.title}</Text>
                  <Text style={styles.propertyPrice}>${item?.apply_fee}</Text>
                </View>
                <View style={styles.viewDetailsButton}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => router.push(`/fairDetails/${item?.id}`)}
                  >
                    <Text style={styles.viewDetailsText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

// Styles for buttons and other components
const styles = StyleSheet.create({
  flatList: {
    padding: 10,
  },
  propertyCard: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  propertyTitle: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
  },
  propertyPrice: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 10,
  },
  viewDetailsButton: {
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
  },
  viewDetailsText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default index;
