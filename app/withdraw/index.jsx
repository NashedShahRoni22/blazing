import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native";
  
  const index = () => {
    const [formData, setFormData] = useState({
      amount: "",
    });
  
    const [balance, setBalance] = useState(50);
  
    // Handle the submit action
    const handleSubmit = () => {
      console.log(formData);
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
        isNaN(enteredAmount) || enteredAmount <= 0 || enteredAmount > balance
      );
    };
  
    return (
      <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <Text style={{ textAlign: "justify", color:"#241147", fontWeight:600, }}>
          Before transfer, please check again that the user's email is correct.
          Once the transfer is done, you cannot cancel the transfer. For any wrong
          transactions, we are not liable.{" "}
        </Text>
  
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
            onChangeText={(text) => handleChange("amount", text)}
            keyboardType="numeric" // Ensure user inputs numbers only
          />
        </View>
  
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.button, isButtonDisabled() && styles.buttonDisabled]} // Disable button if needed
          onPress={handleSubmit}
          disabled={isButtonDisabled()} // Disable button when amount is invalid
        >
          <Text style={styles.buttonText}>
            Transfer {formData.amount && `$${formData.amount}`}
          </Text>
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
      color: "#241147",
    },
    amountLabel: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    amountLabelText: {
      fontWeight: "600",
      color: "#E53935",
    },
    input: {
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 10,
      fontSize: 14,
    },
    button: {
      backgroundColor: "#E53935",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
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
  