import { Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import SplashScreen from "../../components/SplashScreen";
import RenderHTML from 'react-native-render-html';

const mentorsDetails = () => {
  const { id } = useLocalSearchParams();  
  const url = `https://nw71.tv/api/v1/mentor/${id}`;  
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
        <ScrollView contentContainerStyle={styles.container}>
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
    color: '#333',
    lineHeight: 22,
    marginBottom: 12,
  }
});

export default mentorsDetails;
