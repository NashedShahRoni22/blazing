import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import Images from "../constants/Images";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9D1F31",
      }}
    >
      <View
        style={{
          paddingHorizontal: 30,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image source={Images.logo} style={{ height: 80, width: 240 }} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginTop: 30,
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
              fontSize: 16,
              marginLeft: 8,
              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Login;
