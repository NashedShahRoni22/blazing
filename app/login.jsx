import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import Images from "../constants/Images";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E53935", // primary color
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image source={Images.logo} style={{ height: 74, width: 220 }} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginTop: 63,
            backgroundColor: "white",
            width: "100%",
            height: 56,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}
          onPress={() => router.push("/home")}
        >
          <Image source={Images.google} />
          <Text
            style={{
              color: "#808080",
              fontSize: 18,
              marginLeft: 8,
              fontWeight: "600",
            }}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
