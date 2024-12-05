import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text>Profile</Text>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default Profile