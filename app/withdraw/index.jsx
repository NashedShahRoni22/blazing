import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "../../components/SplashScreen";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";

const index = () => {
  const [formData, setFormData] = useState({
    amount: "",
    withdraw_medium: "bkash", // Default to 'bkash'
    withdraw_medium_number: "",
  });

  const [balance, setBalance] = useState("00.00");
  const [loading, setLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);
  const url = "https://nw71.tv/api/v1/wallet";

  // Fetch wallet data on component mount
  useEffect(() => {
    setGetLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setBalance(parseFloat(data?.data?.amount).toFixed(2));
          setGetLoading(false);
        } else {
          alert(data?.message);
        }
      });
  }, []);

  // Handle withdraw request
  const handleSubmit = () => {
    const dataToSubmit = {
      amount: formData.amount,
      withdraw_medium: formData.withdraw_medium,
      withdraw_medium_number: formData.withdraw_medium_number,
    };

    setLoading(true);

    // Perform the POST request
    fetch("https://nw71.tv/api/v1/withdraw-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.status === "success") {
          alert("Withdrawal request successful");
          router.push("/wallet");
        } else {
          alert("Withdrawal request failed: " + data.message);
        }
      })
      .catch((error) => {
        setLoading(false); // Hide spinner in case of an error
        alert("An error occurred: " + error.message);
      });
  };

  // Handle form input changes
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Calculate whether the button should be disabled
  const isButtonDisabled = () => {
    const enteredAmount = parseFloat(formData.amount);
    return (
      isNaN(enteredAmount) ||
      enteredAmount <= 0 ||
      enteredAmount > balance ||
      !formData.withdraw_medium_number
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {getLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Text
            style={{
              textAlign: "justify",
              color: "#241147",
              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            Before withdrawal, please check again that the amount you want to
            withdraw is correct. Once the request is processed, it cannot be
            canceled. For any wrong transactions, we are not liable.
          </Text>

          {/* Withdraw Medium Dropdown */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Select Withdrawal Medium</Text>
            <Picker
              selectedValue={formData.withdraw_medium}
              style={styles.picker}
              onValueChange={(itemValue) => handleChange("withdraw_medium", itemValue)}
            >
              <Picker.Item label="bkash" value="bkash" />
              <Picker.Item label="nagad" value="nagad" />
              <Picker.Item label="other" value="other" />
            </Picker>
          </View>

          {/* Withdraw Medium Number */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Withdrawal Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Withdrawal Number"
              value={formData.withdraw_medium_number}
              onChangeText={(text) => {
                if (/^\d*$/.test(text)) {
                  handleChange("withdraw_medium_number", text);
                }
              }}
              keyboardType="numeric" // Ensure user inputs numbers only
            />
          </View>

          {/* Amount Input */}
          <View style={styles.inputContainer}>
            <View style={styles.amountLabel}>
              <Text style={styles.label}>Enter Amount</Text>
              <Text style={styles.amountLabelText}>
                Available Amount ${balance}
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              value={formData.amount}
              onChangeText={(text) => {
                // Only update amount if the text is a valid number
                if (/^\d*\.?\d*$/.test(text)) {
                  handleChange("amount", text);
                }
              }}
              keyboardType="numeric" // Ensure user inputs numbers only
            />
          </View>

          {/* Withdraw Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, isButtonDisabled() && styles.buttonDisabled]} // Disable button if needed
            onPress={handleSubmit}
            disabled={isButtonDisabled()} // Disable button when amount is invalid
          >
            {loading ? ( // Show spinner while loading
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                Withdraw {formData.amount && `$${formData.amount}`}
              </Text>
            )}
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#241147",
    fontFamily: "Montserrat_400Regular",
  },
  amountLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountLabelText: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#E53935",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
  picker: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    backgroundColor: "#9D1F31",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingHorizontal: 15,
    marginTop: 24,
  },
  buttonDisabled: {
    backgroundColor: "#D3D3D3", // Disabled button color
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    marginLeft: 8,
    fontWeight: "600",
  },
});

export default index;
