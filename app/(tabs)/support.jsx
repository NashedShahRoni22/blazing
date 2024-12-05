import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Support = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text>Support</Text>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default Support;