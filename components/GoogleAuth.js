import { makeRedirectUri } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { Alert } from "react-native";

const CLIENT_ID =
  "148240256847-34mbbn33oog076vgvroaaksamfhbgibt.apps.googleusercontent.com";

export default function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: CLIENT_ID,
    redirectUri: makeRedirectUri({
      native: 'com.mohpro.app:/oauth2redirect',
    }),
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      fetchUserData(authentication.accessToken);
    }
  }, [response]);

  const fetchUserData = async (accessToken) => {
    try {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const userInfo = await res.json();

      // Save data to SecureStore
      await SecureStore.setItemAsync("user", JSON.stringify(userInfo));

      // Send user info to your backend
      await saveToDatabase(userInfo);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch user data");
    }
  };

  const saveToDatabase = async (userInfo) => {
    try {
      const response = await fetch("http://YOUR_BACKEND_URL/save-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const result = await response.json();
      if (!result.success) {
        Alert.alert("Error", "Failed to save user data");
      }
    } catch (error) {
      Alert.alert("Error", "Network error while saving user data");
    }
  };

  return { promptAsync, request };
}
