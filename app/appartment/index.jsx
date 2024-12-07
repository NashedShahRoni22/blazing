import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SplashScreen from "../../components/SplashScreen";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const Index = () => {
  const [propertyType, setPropertyType] = useState("");
  const [loader, setLoader] = useState(true);
  const [faqs, setFaqs] = useState([]);
  const faqUrl = "https://nw71.tv/api/v1/faqs?type=properties";

  const handlePress = (type) => {
    setPropertyType(type);
    router.push(`/${type}`);
  };

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
    <SafeAreaView style={styles.container}>
      {/* filter buttons  */}
      <View style={styles.buttonContainer}>
        {/* Rent Button */}
        <TouchableOpacity
          style={[
            styles.button,
            propertyType === "rent" && styles.selectedButton,
          ]}
          onPress={() => handlePress("rent")}
        >
          <Text
            style={[
              styles.buttonText,
              propertyType === "rent" && styles.selectedText,
            ]}
          >
            Rent
          </Text>
        </TouchableOpacity>

        {/* Buy Button */}
        <TouchableOpacity
          style={[
            styles.button,
            propertyType === "buy" && styles.selectedButton,
          ]}
          onPress={() => handlePress("buy")}
        >
          <Text
            style={[
              styles.buttonText,
              propertyType === "buy" && styles.selectedText,
            ]}
          >
            Buy
          </Text>
        </TouchableOpacity>

        {/* Sale Button */}
        <TouchableOpacity
          style={[
            styles.button,
            propertyType === "sale" && styles.selectedButton,
          ]}
          onPress={() => handlePress("sale")}
        >
          <Text
            style={[
              styles.buttonText,
              propertyType === "sale" && styles.selectedText,
            ]}
          >
            Sell
          </Text>
        </TouchableOpacity>
      </View>

      {loader ? (
        <SplashScreen />
      ) : (
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
      )}

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

// Styles for buttons and other components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
  flatList: {
    padding: 5,
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
    width: "100%",
  },
  propertyTitle: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
  },
  propertyDetails: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  propertyArea: {
    color: "#808080",
    fontSize: 12,
    marginVertical: 3,
    fontFamily: "Montserrat_500Medium",
  },
  propertyPrice: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
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
    fontSize: 10,
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default Index;
