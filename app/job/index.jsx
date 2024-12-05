import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import SplashScreen from "../../components/SplashScreen";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const url = "https://nw71.tv/api/v1/job";
  const [loader, setLoader] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setJobs(data?.data);
        } else {
          console.log("Something went wrong");
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: "#9D1F31",
          height: 56,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          marginBottom:10,
        }}
        onPress={() => router.push("/addJob")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "Montserrat_600SemiBold",
            letterSpacing: 1,
          }}
        >
          Add Job
        </Text>
      </TouchableOpacity>
      {loader ? (
        <SplashScreen />
      ) : (
        <FlatList
          data={jobs}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginBottom: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  {item?.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: "#808080",
                        fontSize: 12,
                        marginVertical: 3,
                        fontFamily: "Montserrat_400Regular",
                      }}
                    >
                      {item?.area}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "600",
                        fontFamily: "Montserrat_600SemiBold",
                      }}
                    >
                      ${item?.salary}
                    </Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
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
                    }}
                    onPress={() => router.push(`/jobDetails/${item?.id}`)}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        fontFamily: "Montserrat_600SemiBold",
                      }}
                    >
                      View Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default index;
