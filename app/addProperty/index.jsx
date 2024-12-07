import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    area: "",
    country: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const { fullName, email, phone, area, country, details } = formData;

    // Check if all required fields are filled
    if (!fullName || !email || !phone || !area || !country || !details) {
      alert("All fields are required.");
      return;
    }

    // Prepare form data for submission
    const requestData = new FormData();
    requestData.append("name", fullName);
    requestData.append("email", email);
    requestData.append("phone", phone);
    requestData.append("area", area);
    requestData.append("country", country);
    requestData.append("details", details);

    setIsSubmitting(true);

    try {
      // Send the form data to your API endpoint
      const response = await fetch("https://nw71.tv/api/v1/sale", {
        method: "POST",
        body: requestData,
      });

      const responseData = await response.json();

      if (response.ok) {
        alert("Property added successfully.");
      } else {
        alert(`Error: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={formData.fullName}
            onChangeText={(text) => handleChange("fullName", text)}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
          />
        </View>

        {/* Phone */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone"
            value={formData.phone}
            onChangeText={(text) => handleChange("phone", text)}
          />
        </View>

        {/* Area */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Area</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Area"
            value={formData.area}
            onChangeText={(text) => handleChange("area", text)}
          />
        </View>

        {/* Country */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Country"
            value={formData.country}
            onChangeText={(text) => handleChange("country", text)}
          />
        </View>

        {/* Details */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Details</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter Details"
            value={formData.details}
            onChangeText={(text) => handleChange("details", text)}
            multiline={true}
            numberOfLines={4}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.buttonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: "Montserrat_600SemiBold",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  textArea: {
    height: 200, 
    textAlignVertical: "top", 
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    backgroundColor: "#9D1F31",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    letterSpacing: 1,
  },
});

export default Index;
