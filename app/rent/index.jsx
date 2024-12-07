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

const Index = () => {
  const [propertyType, setPropertyType] = useState(1);
  const [loader, setLoader] = useState(true);
  const [properties, setProperties] = useState([]);
  const url = `https://nw71.tv/api/v1/property?type=${propertyType}`;

  const handlePress = (type) => {
    setPropertyType(type);
  };

  // get property
  useEffect(() => {
    setLoader(true);
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
  }, [propertyType]);

  return (
    <SafeAreaView style={styles.container}>
      {/* filter buttons  */}
      <View style={styles.buttonContainer}>
        {/* Rent Button */}
        <TouchableOpacity
          style={[styles.button, propertyType === 1 && styles.selectedButton]}
          onPress={() => handlePress(1)}
        >
          <Text
            style={[
              styles.buttonText,
              propertyType === 1 && styles.selectedText,
            ]}
          >
            Rent
          </Text>
        </TouchableOpacity>

        {/* Rent Button */}
        <TouchableOpacity
          style={[styles.button, propertyType === 2 && styles.selectedButton]}
          onPress={() => handlePress(2)}
        >
          <Text
            style={[
              styles.buttonText,
              propertyType === 2 && styles.selectedText,
            ]}
          >
            Buy
          </Text>
        </TouchableOpacity>

        {/* Sale Button */}
        <TouchableOpacity
          style={[styles.button, propertyType === 3 && styles.selectedButton]}
          onPress={() => handlePress(3)}
        >
          <Text
            style={[
              styles.buttonText,
              propertyType === 3 && styles.selectedText,
            ]}
          >
            Sell
          </Text>
        </TouchableOpacity>
      </View>

      {loader ? (
        <SplashScreen />
      ) : (
        <>
          {propertyType === 3 && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: "#9D1F31",
                height: 56,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                margin: 5,
              }}
              onPress={() => router.push("/addProperty")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Montserrat_600SemiBold",
                  letterSpacing: 1,
                }}
              >
                Add Property
              </Text>
            </TouchableOpacity>
          )}
          <FlatList
            style={styles.flatList}
            data={properties}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.propertyCard}>
                <Text style={styles.propertyTitle}>{item?.title}</Text>
                <View style={styles.propertyDetails}>
                  <View>
                    <Text style={styles.propertyArea}>{item?.area}</Text>
                    <Text style={styles.propertyPrice}>${item?.price}</Text>
                  </View>
                  <View style={styles.viewDetailsButton}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() =>
                        router.push(`/appartmentDetails/${item?.id}`)
                      }
                    >
                      <Text style={styles.viewDetailsText}>View Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
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
