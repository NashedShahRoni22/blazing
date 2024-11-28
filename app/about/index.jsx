import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import SplashScreen from "../../components/SplashScreen";
import WebView from "react-native-webview";

const index = () => {
  const { id } = useLocalSearchParams();
  const url = `https://nw71.tv/api/v1/about`;
  const [loader, setLoader] = useState(true);
  const [iframeHtml, setIframeHtml] = useState("");
  const { width, height } = Dimensions.get("window");
  useEffect(() => {
    // Fetch the data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          const { details } = data?.data;

          // Clean the details field (for YouTube URLs and backslashes)
          let cleanedDetails = details?.replace(/\\/g, ""); // Remove backslashes
          cleanedDetails = cleanedDetails?.replace(
            /\/\/www\.youtube\.com\/embed/g,
            "https://www.youtube.com/embed"
          );

          // Construct the HTML string dynamically using the extracted variables
          const iframeHtmlContent = `
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <style>
                  body {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                  }
                  iframe {
                    width: 100% !important;
                    height: auto !important;
                    max-width: 100%;
                    max-height: 100vh; 
                    aspect-ratio: 16/9;
                  }
                  video {
                    width: 100% !important;
                    height: auto !important;
                    max-width: 100%;
                    max-height: 100vh;
                    aspect-ratio: 16/9;
                  }
                  img {
                    width: 100%;
                    height: auto;
                    max-width: 100%;
                    display: block;
                    object-fit: contain;
                  }
                  div{
                    padding:10;
                  }
                </style>
              </head>
              <body>
                <div>
                ${cleanedDetails}
                </div>
              </body>
            </html>
          `;

          setIframeHtml(iframeHtmlContent);
        } else {
          console.log("Something went wrong");
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id, url, width, height]);

  if (loader) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => router.push("/mentors")}
      >
        <Text style={styles.buttonText}>Our Mentors</Text>
      </TouchableOpacity>
      <WebView
        originWhitelist={["*"]}
        source={{ html: iframeHtml }}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        scrollEnabled={false}
      />
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
    backgroundColor: "#9D1F31",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default index;
