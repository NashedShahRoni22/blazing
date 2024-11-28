import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Images from "../../constants/Images";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

const index = () => {
  const [amount, setAmount] = useState("00.00");
  const url = "https://nw71.tv/api/v1/wallet";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if(data.status === "success"){
          // Format the amount to always have two decimal places
          setAmount(parseFloat(data?.data?.amount).toFixed(2));
        }
        else{
          alert(data?.message);
        }
      });
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Image - Centered */}
        <Image source={Images.wallet} style={styles.image} />

        {/* Balance Text */}
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>${amount}</Text>

        <View style={styles.buttonsContainer}>
          {/* Transfer Balance Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => router.push("/transfer")}
          >
            <FontAwesome
              name="send"
              size={28}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Transfer Balance</Text>
          </TouchableOpacity>

          {/* Withdraw Balance Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => router.push("/withdraw")}
          >
            <FontAwesome
              name="money"
              size={28}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Withdraw Balance</Text>
          </TouchableOpacity>

          {/* Transaction History Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => router.push("/transection")}
          >
            <FontAwesome
              name="history"
              size={28}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Transection History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  balanceLabel: {
    color: "#9D1F31",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 5,
  },
  balanceAmount: {
    color: "#9D1F31",
    textAlign: "center",
    fontSize: 36,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 24,
  },
  buttonsContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#9D1F31",
    height: 56, 
    marginBottom: 14, 
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: 15,
    elevation: 5, 
  },
  icon: {
    marginRight: 10, 
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default index;
