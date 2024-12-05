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
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    tripType: "One way",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateField, setSelectedDateField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const {
      fullName,
      destination,
      departureDate,
      returnDate,
      dateOfBirth,
      email,
      phone,
      tripType,
    } = formData;
  
    // Date validation
    const today = new Date();
    const departureDateObj = new Date(departureDate);
    const returnDateObj = returnDate ? new Date(returnDate) : null;
    const dateOfBirthObj = new Date(dateOfBirth);
  
    if (
      !fullName ||
      !destination ||
      !departureDate ||
      !dateOfBirth ||
      !email ||
      !phone
    ) {
      alert("All fields are required.");
      return;
    }
  
    if (departureDateObj <= today) {
      alert("Departure date must be after today.");
      return;
    }
  
    if (returnDateObj && returnDateObj < departureDateObj) {
      alert("Return date must be equal or after departure date.");
      return;
    }
  
    // Ensure dateOfBirth is before today
    if (dateOfBirthObj >= today) {
      alert("Date of birth must be before today.");
      return;
    }
  
    const requestData = new FormData();
    requestData.append("full_name", fullName);
    requestData.append("departure", departureDate);
    requestData.append("destination", destination);
    requestData.append("departure_date", departureDate);
    requestData.append("return_date", returnDate || null);
    requestData.append("date_of_birth", dateOfBirth);
    requestData.append("email", email);
    requestData.append("phone", phone);
    requestData.append("trip_type", tripType);
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://nw71.tv/api/v1/air-ticket", {
        method: "POST",
        body: requestData,
      });
  
      const responseData = await response.json();
      if (response.ok) {
        alert("Air ticket request sent successfully.");
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

  const showDatepicker = (field) => {
    setSelectedDateField(field);
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    if (selectedDate) {
      const date = selectedDate.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
      handleChange(selectedDateField, date);
    }
    setShowDatePicker(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChangeText={(text) => handleChange("fullName", text)}
          />
        </View>

        {/* Destination */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Destination</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Destination"
            value={formData.destination}
            onChangeText={(text) => handleChange("destination", text)}
          />
        </View>

        {/* Departure Date */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Departure Date</Text>
          <TouchableOpacity onPress={() => showDatepicker("departureDate")}>
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="YYYY-MM-DD"
              value={formData.departureDate}
            />
          </TouchableOpacity>
        </View>

        {/* Return Date (Optional) */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Return Date (Optional)</Text>
          <TouchableOpacity onPress={() => showDatepicker("returnDate")}>
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="YYYY-MM-DD"
              value={formData.returnDate}
            />
          </TouchableOpacity>
        </View>

        {/* Date of Birth */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity onPress={() => showDatepicker("dateOfBirth")}>
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="YYYY-MM-DD"
              value={formData.dateOfBirth}
            />
          </TouchableOpacity>
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
            keyboardType="phone-pad"
          />
        </View>

        {/* Trip Type (Select Box) */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Trip Type</Text>
          <Picker
            selectedValue={formData.tripType}
            style={styles.picker}
            onValueChange={(itemValue) => handleChange("tripType", itemValue)}
          >
            <Picker.Item label="One way" value="One way" />
            <Picker.Item label="Round" value="Round" />
          </Picker>
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

      {/* Date Picker Modal */}
      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
        />
      )}
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
    fontFamily: "Montserrat_600SemiBold"
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: "Montserrat_400Regular"
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
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginTop: 10,
    fontFamily: "Montserrat_600SemiBold"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    letterSpacing: 1
  },
});


export default index;
