import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../constants/Images";
import { router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Image - Centered */}
        <Image source={Images.wallet} style={styles.image} />

        {/* Balance Text */}
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>$50.00</Text>

        {/* Transaction History Button */}
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={()=> router.push("/transection")}>
          <Text style={styles.buttonText}>Transaction History</Text>
        </TouchableOpacity>

        {/* Transfer Balance Button */}
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Transfer Balance</Text>
        </TouchableOpacity>

        {/* Withdraw Balance Button */}
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Withdraw Balance</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  balanceAmount: {
    color: "#9D1F31",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "600",
    marginBottom: 24, 
  },
  button: {
    backgroundColor: "#E53935",
    height: 50,
    width: "100%",  
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: 15,
    marginTop: 12, 
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default index;
