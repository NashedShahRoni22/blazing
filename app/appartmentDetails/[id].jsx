import { Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import SplashScreen from "../../components/SplashScreen";
import RenderHTML from 'react-native-render-html';

const appartmentDetails = () => {
  const { id } = useLocalSearchParams(); 
  const url = `https://nw71.tv/api/v1/property/${id}`;  
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
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.area}>Area: {data?.area}</Text>
          <Text style={styles.price}>Price: {data?.price}</Text>
          <Text style={styles.referenceId}>Reference ID: {data?.reference_id}</Text>
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
  id: {
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  htmlContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 12,
  }
});

export default appartmentDetails;
