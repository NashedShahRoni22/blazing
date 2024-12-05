import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import SplashScreen from "../../../components/SplashScreen";
import Images from "../../../constants/Images";
import { StatusBar } from "expo-status-bar";

const UniversityDetails = () => {
  const { visa_id, id } = useLocalSearchParams();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `https://nw71.tv/api/v1/visa-universities/${visa_id}/${id}`;

  useEffect(() => {
    if (visa_id && id) {
      const fetchUniversity = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setUniversity(data?.data);
        } catch (error) {
          console.error("Error fetching university data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUniversity();
    } else {
      // Handle case when visa_id or id is missing
      setLoading(false);
    }
  }, [visa_id, id]);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={university}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                borderRadius: 10,
                marginBottom: 10,
                backgroundColor: "white",
                shadowColor: "#000",
                flexDirection: "row",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                padding: 10,
                gap: 8,
              }}
              onPress={() => router.push(`/universityDetails/${item?.id}`)}
            >
              <Image
                source={Images?.university}
                style={{ height: 48, width: 48 }}
              />
              <Text style={{ fontSize: 16, fontFamily: "Montserrat_600SemiBold", flexDirection: "row", flex:1 }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default UniversityDetails;
