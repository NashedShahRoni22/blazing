import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Images from "../../constants/Images";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Image - Centered */}
        <Image source={Images.wallet} style={styles.image} />

        {/* Balance Text */}
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>$50.00</Text>

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
            <Text style={styles.buttonText}>Transfer{"\n"}Balance</Text>
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
            <Text style={styles.buttonText}>Withdraw{"\n"}Balance</Text>
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
            <Text style={styles.buttonText}>Transection{"\n"}History</Text>
          </TouchableOpacity>
        </View>
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
  buttonsContainer: {
    flexDirection: "row", // Align buttons horizontally
    flexWrap: "wrap", // Allow buttons to wrap to the next line
    justifyContent: "space-between", // Add space between buttons
    gap: 12, // Adds gap between buttons
    width: "100%", // Make sure buttons take full width
  },
  button: {
    backgroundColor: "#E53935",
    height: 120,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: 15,
    marginVertical: 10, // Vertical spacing between buttons
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    // fontWeight: "600",
  },
});

export default index;
