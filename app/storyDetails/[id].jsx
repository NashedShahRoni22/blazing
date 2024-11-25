import { SafeAreaView, ScrollView, StyleSheet, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import SplashScreen from "../../components/SplashScreen";
import HTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import { WebView } from "react-native-webview"; // Import WebView for iframe support


const storyDetails = () => {
  const { id } = useLocalSearchParams();
  const url = `https://nw71.tv/api/v1/success-story/${id}`;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);

  const { width } = useWindowDimensions(); // Get screen width for responsive images

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

  // Custom renderers to handle images and iframe (YouTube)
  const renderers = {
    img: ({ src }) => {
      return (
        <Image
          source={{ uri: src }}
          style={{ width: width - 20, height: 200, resizeMode: "contain" }}
        />
      );
    },
    iframe: ({ src }) => {
      const fullSrc = src.startsWith("http") ? src : `https:${src}`; // Ensure the src is a full URL
      return (
        <WebView
          originWhitelist={['*']}
          source={{ uri: fullSrc }}
          style={{ width: width - 20, height: 200 }}
        />
      );
    },
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {loader ? (
        <SplashScreen />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <HTML
            source={{ html: data?.details }}
            tagsStyles={styles.htmlContent} // Optional: Customize HTML content styling
            renderers={renderers} // Add custom renderers for images and iframe
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  htmlContent: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 12,
  },
});

export default storyDetails;
