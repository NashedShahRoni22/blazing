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
    title: "",
    area: "",
    salary: "",
    details: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const { title, salary, area, country, details } = formData;

    // Check if all required fields are filled
    if (!title || !salary || !area || !country || !details) {
      alert("All fields are required.");
      return;
    }

    // Prepare form data for submission
    const requestData = new FormData();
    requestData.append("title", title);
    requestData.append("salary", salary);
    requestData.append("country", country);
    requestData.append("area", area);
    requestData.append("details", details);

    setIsSubmitting(true);

    try {
      // Send the form data to your API endpoint
      const response = await fetch("https://nw71.tv/api/v1/job", {
        method: "POST",
        body: requestData,
      });

      const responseData = await response.json();

      if (response.ok) {
        alert("Job added successfully.");
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
        {/* Full Title */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Title"
            value={formData.fullName}
            onChangeText={(text) => handleChange("title", text)}
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

        {/* Salary */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Salary</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Salary"
            value={formData.salary}
            onChangeText={(text) => handleChange("salary", text)}
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
            style={styles.input}
            placeholder="Enter Details"
            value={formData.details}
            onChangeText={(text) => handleChange("details", text)}
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
