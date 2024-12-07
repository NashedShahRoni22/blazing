import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "../../components/SplashScreen";

const index = () => {
  const DATA = [
    {
      id: "aB1$2dFg",
      status: "Paid",
      email: "john.doe@example.com",
      amount: 5,
      date: "2024-11-12 14:30",
    },
    {
      id: "hJ3@5kLm",
      status: "Pending",
      email: "jane.smith@example.com",
      amount: 10,
      date: "2024-11-12 15:45",
    },
    {
      id: "pQ7&6tHr",
      status: "Paid",
      email: "alice.jones@example.com",
      amount: 5,
      date: "2024-11-12 16:00",
    },
    {
      id: "uY9!8wIr",
      status: "Pending",
      email: "bob.white@example.com",
      amount: 20,
      date: "2024-11-12 16:30",
    },
    {
      id: "nK4#1pQm",
      status: "Paid",
      email: "carla.green@example.com",
      amount: 10,
      date: "2024-11-12 17:15",
    },
    {
      id: "oL2*5fSz",
      status: "Pending",
      email: "david.brown@example.com",
      amount: 5,
      date: "2024-11-12 18:00",
    },
    {
      id: "tX3^9vEw",
      status: "Paid",
      email: "emily.martin@example.com",
      amount: 20,
      date: "2024-11-12 18:45",
    },
    {
      id: "iR6!0bGv",
      status: "Pending",
      email: "frank.harris@example.com",
      amount: 10,
      date: "2024-11-12 19:00",
    },
    {
      id: "sJ7$2kWz",
      status: "Paid",
      email: "grace.clark@example.com",
      amount: 5,
      date: "2024-11-12 19:30",
    },
    {
      id: "cV8@1zNq",
      status: "Pending",
      email: "henry.miller@example.com",
      amount: 20,
      date: "2024-11-12 20:00",
    },
    {
      id: "dL0#3oXj",
      status: "Paid",
      email: "isabella.johnson@example.com",
      amount: 10,
      date: "2024-11-12 21:15",
    },
    {
      id: "fK5!9mXt",
      status: "Pending",
      email: "jackson.davis@example.com",
      amount: 5,
      date: "2024-11-12 22:00",
    },
    {
      id: "qP2$7wYr",
      status: "Paid",
      email: "katherine.lee@example.com",
      amount: 10,
      date: "2024-11-12 22:30",
    },
  ];
  const url = "https://nw71.tv/api/v1/referrals";
  const [loader, setLoader] = useState(true);
  const [refers, setRefers] = useState([]);
  
//   get refers 
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setRefers(data?.data);
        } else {
          console.log("Something went wrong");
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loader ? (
        <SplashScreen />
      ) : (
        <FlatList
          style={ {padding:10}}
          data={refers}
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
                  gap: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Montserrat_600SemiBold",
                        // color: isPending ? "gray" : "green", 
                      }}
                    >
                      {item.status}
                    </Text>
                    <Text
                      style={{
                        color: "#ccc",
                        fontSize: 12,
                        fontFamily: "Montserrat_600SemiBold",
                      }}
                    >
                      (#{item.id})
                    </Text>
                    <Text
                      style={{
                        color: "#ccc",
                        fontSize: 12,
                        fontFamily: "Montserrat_500Medium",
                      }}
                    >
                      {item.email}
                    </Text>
                    <Text
                      style={{
                        color: "#ccc",
                        fontSize: 12,
                        fontFamily: "Montserrat_500Medium",
                      }}
                    >
                      {item.date}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 30,
                      fontFamily: "Montserrat_600SemiBold",
                    //   color: isPending ? "gray" : "green", 
                    }}
                  >
                    ${item.amount}
                  </Text>
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
