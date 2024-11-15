import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    trimType: "One way",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateField, setSelectedDateField] = useState("");

  const handleSubmit = () => {
    console.log(formData);
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
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
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

      {/* Trim Type (Select Box) */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Trim Type</Text>
        <Picker
          selectedValue={formData.trimType}
          style={styles.picker}
          onValueChange={(itemValue) => handleChange("trimType", itemValue)}
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
      >
        <Text style={styles.buttonText}>Request Air Ticket</Text>
      </TouchableOpacity>

      {/* Date Picker Modal */}
      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onDateChange}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
  },
  picker: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
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
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    marginLeft: 8,
    fontWeight: "600",
  },
});

export default index;
