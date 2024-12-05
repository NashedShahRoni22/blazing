import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { useRoute } from "@react-navigation/native"; // Import useRoute
import SplashScreen from "../../components/SplashScreen";
import { StatusBar } from "expo-status-bar";


const universityDetails = () => {
  const { id } = useRoute().params; // Use useRoute() to get route parameters
  const url = `https://nw71.tv/api/v1/visa-university/${id}`;
  const [iframeHtml, setIframeHtml] = useState("");
  const [loader, setLoader] = useState(true);

  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    // Fetch the data from the API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          // Extract variables from the data
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
                    text-align: justify;
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
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: iframeHtml }}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        scrollEnabled={false}
      />
      <StatusBar style="light" />
    </View>
  );
};

export default universityDetails;
