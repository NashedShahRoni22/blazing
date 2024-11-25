import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import SplashScreen from "../../components/SplashScreen";
import RenderHTML from "react-native-render-html";

const index = () => {
  const { id } = useLocalSearchParams();
  const url = `https://nw71.tv/api/v1/about`;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setData(data?.data);
        } else {
          console.log("Something went wrong");
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {loader ? (
        <SplashScreen />
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={()=> router.push("/mentors") }
          >
            <Text style={styles.buttonText}>Our Mentors</Text>
          </TouchableOpacity>
          <RenderHTML
            contentWidth={300}
            source={{ html: data?.details }}
            tagsStyles={styles.htmlContent}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  htmlContent: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#E53935",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default index;
