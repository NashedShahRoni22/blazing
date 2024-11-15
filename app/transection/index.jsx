import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";

const index = () => {
  const DATA = [
    {
      id: "aB1$2dFg",
      status: "Sent",
      email: "john.doe@example.com",
      amount: 5,
      date: "2024-11-12 14:30",
    },
    {
      id: "hJ3@5kLm",
      status: "Received",
      email: "jane.smith@example.com",
      amount: 10,
      date: "2024-11-12 15:45",
    },
    {
      id: "pQ7&6tHr",
      status: "Withdraw",
      email: "alice.jones@example.com",
      amount: 5,
      date: "2024-11-12 16:00",
    },
    {
      id: "uY9!8wIr",
      status: "Sent",
      email: "bob.white@example.com",
      amount: 20,
      date: "2024-11-12 16:30",
    },
    {
      id: "nK4#1pQm",
      status: "Received",
      email: "carla.green@example.com",
      amount: 10,
      date: "2024-11-12 17:15",
    },
    {
      id: "oL2*5fSz",
      status: "Withdraw",
      email: "david.brown@example.com",
      amount: 5,
      date: "2024-11-12 18:00",
    },
    {
      id: "tX3^9vEw",
      status: "Sent",
      email: "emily.martin@example.com",
      amount: 20,
      date: "2024-11-12 18:45",
    },
    {
      id: "iR6!0bGv",
      status: "Received",
      email: "frank.harris@example.com",
      amount: 10,
      date: "2024-11-12 19:00",
    },
    {
      id: "sJ7$2kWz",
      status: "Withdraw",
      email: "grace.clark@example.com",
      amount: 5,
      date: "2024-11-12 19:30",
    },
    {
      id: "cV8@1zNq",
      status: "Sent",
      email: "henry.miller@example.com",
      amount: 20,
      date: "2024-11-12 20:00",
    },
    {
      id: "dL0#3oXj",
      status: "Received",
      email: "isabella.johnson@example.com",
      amount: 10,
      date: "2024-11-12 21:15",
    },
    {
      id: "fK5!9mXt",
      status: "Withdraw",
      email: "jackson.davis@example.com",
      amount: 5,
      date: "2024-11-12 22:00",
    },
    {
      id: "qP2$7wYr",
      status: "Sent",
      email: "katherine.lee@example.com",
      amount: 10,
      date: "2024-11-12 22:30",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          // Determine color based on status
          const getStatusColor = (status) => {
            switch (status) {
              case "Sent":
                return "orange";
              case "Received":
                return "green";
              case "Withdraw":
                return "red";
              default:
                return "gray"; // Default if status is not recognized
            }
          };

          return (
            <View
              style={{
                padding: 10,
                backgroundColor: "white",
                borderRadius: 10,
                marginTop: 10,
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
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "600",
                      color: getStatusColor(item.status), // Use the function to set color
                    }}
                  >
                    {item.status}
                  </Text>
                  <Text
                    style={{
                      color: "#A3A3A3",
                    }}
                  >
                    #{item.id}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "600",
                    color: getStatusColor(item.status), // Use the function to set color
                  }}
                >
                  ${item.amount}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "#A3A3A3",
                  }}
                >
                  {item.email}
                </Text>
                <Text
                  style={{
                    color: "#A3A3A3",
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default index;
