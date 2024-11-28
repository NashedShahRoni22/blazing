import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import SplashScreen from "../../components/SplashScreen";
import WebView from "react-native-webview";

const appartmentDetails = () => {
  const { id } = useLocalSearchParams();
  const url = `https://nw71.tv/api/v1/property/${id}`;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);
  const [iframeHtml, setIframeHtml] = useState("");
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    // Fetch the data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          // Extract variables from the data
          setData(data?.data);
          console.log(data.data);

          const { title, imageUrl, description, videoUrl, details } =
            data?.data;

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
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.area}>Area: {data?.area}</Text>
      <Text style={styles.price}>Price: {data?.price}</Text>
      <Text style={styles.referenceId}>Reference ID: {data?.reference_id}</Text>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  area: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: "#E53935",
    marginBottom: 8,
  },
  referenceId: {
    fontSize: 16,
    marginBottom: 8,
  },
  htmlContent: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 12,
  },
});

export default appartmentDetails;
