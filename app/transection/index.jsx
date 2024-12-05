import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import SplashScreen from "../../components/SplashScreen";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const url = "https://nw71.tv/api/v1/transaction-history";

  useEffect(() => {
    setLoader(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          setData(data?.data);
          setLoader(false);
        } else {
          alert(data?.message);
          setLoader(false);
        }
      });
  }, []);

  // Function to determine the text color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "orange"; // Yellow for pending
      case "Successful":
        return "green"; // Green for successful
      default:
        return "#A3A3A3"; // Gray for default status
    }
  };

  // Function to determine the amount color based on transaction_type
  const getAmountColor = (transaction_type) => {
    return transaction_type === "Received" ? "green" : "red"; // Green for "Received", red for others
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {loader ? (
        <SplashScreen />
      ) : (
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardTitle}>
                    <Text
                      style={[
                        styles.statusText,
                        { color: getStatusColor(item.status) }, // Status text color
                      ]}
                    >
                      {item.status}
                    </Text>
                    <Text style={styles.idText}>#{item.id}</Text>
                  </View>
                  <Text
                    style={[
                      styles.amountText,
                      { color: getAmountColor(item.transaction_type) }, // Conditional color based on transaction_type
                    ]}
                  >
                    ${item.amount}
                  </Text>
                </View>

                <View style={styles.cardFooter}>
                  <Text style={styles.emailText}>{item.email}</Text>
                  <Text style={styles.emailText}>{item.transaction_type}</Text>
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

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap: 8,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  statusText: {
    fontSize: 18,
    fontFamily:"Montserrat_600SemiBold"
  },
  idText: {
    color: "#A3A3A3",
  },
  amountText: {
    fontSize: 18,
    fontFamily:"Montserrat_600SemiBold"
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emailText: {
    color: "#A3A3A3",
    fontFamily:"Montserrat_600SemiBold"
  },
  dateText: {
    color: "#A3A3A3",
  },
  transactionTypeText: {
    fontSize: 14,
    color: "#A3A3A3",
    marginTop: 10,
    fontFamily:"Montserrat_400Regular"
  },
});

export default index;
