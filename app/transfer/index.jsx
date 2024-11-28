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
import { router } from "expo-router";

const index = () => {
  const [formData, setFormData] = useState({
    email: "",
    amount: "",
  });

  const [balance, setBalance] = useState("00.00");
  const [loading, setLoading] = useState(false); // Loading state for the spinner

  const url = "https://nw71.tv/api/v1/wallet";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          // Format the amount to always have two decimal places
          setBalance(parseFloat(data?.data?.amount).toFixed(2));
        } else {
          alert(data?.message);
        }
      });
  }, []);

  // Handle the submit action
  const handleSubmit = () => {
    const dataToSubmit = {
      receiver_email: formData.email,
      amount: formData.amount,
    };

    setLoading(true); // Start the spinner

    // Perform the POST request
    fetch("https://nw71.tv/api/v1/transfer-balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); // Stop the spinner

        if (data.status === "success") {
          alert("Transfer successful");
          router.push("/wallet");;
        } else {
          alert("Transfer failed: " + data.message);
        }
      })
      .catch((error) => {
        setLoading(false); // Stop the spinner
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
      isNaN(enteredAmount) || enteredAmount <= 0 || enteredAmount > balance || !formData.email
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Text style={{ textAlign: "justify", color: "#241147", fontFamily:"Montserrat_600SemiBold" }}>
        Before transfer, please check again that the user's email is correct.
        Once the transfer is done, you cannot cancel the transfer. For any wrong
        transactions, we are not liable.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Receiver Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Receiver Email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
        />
      </View>

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

      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button, isButtonDisabled() && styles.buttonDisabled]} // Disable button if needed
        onPress={handleSubmit}
        disabled={isButtonDisabled()} // Disable button when amount is invalid
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>
            Transfer {formData.amount && `$${formData.amount}`}
          </Text>
        )}
      </TouchableOpacity>
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
    fontFamily:"Montserrat_400Regular",
    color: "#241147",
  },
  amountLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountLabelText: {
    fontFamily:"Montserrat_600SemiBold",
    color: "#E53935",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 14,
    fontFamily:"Montserrat_400Regular",
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
