import { Stack } from "expo-router";
import '../i18n/i18n';
import "./globals.css";
import { Image } from "react-native";
import Toast from 'react-native-toast-message';
import { useEffect } from "react";

export default function RootLayout() {


  return (
  <>
    <Stack >
      <Stack.Screen 
        name="index" 
        options={{
          headerStyle: {
            backgroundColor: 'white', // Dark blue-gray background to match the app's gradient
          },
          headerShadowVisible: false, // Removes the shadow for a cleaner look
          headerLeft: () => (
            <Image 
            source={require('../assets/images/AppLogo.png')} // Path to your logo image
            style={{ width: 120, height: 45, resizeMode: 'contain' }} // Adjust dimensions as needed
            />
          ),
          headerTitle: () => (
            <Image 
            source={require('../assets/images/AppName.png')} // Path to your settings icon image
            style={{ width: 120, height: 45, resizeMode: 'contain'}} // Adjust dimensions as needed
            />
          ),
          headerTitleAlign: 'center' ,
        }} 
        />
      <Stack.Screen name = "shares/index" options={
        {
          headerStyle: {
            backgroundColor: '#1E293B', // Dark blue-gray background to match the app's gradient
          },
          headerShadowVisible: false, // Removes the shadow for a cleaner look
          headerLeft: () => (
            <Image 
            source={require('../assets/images/AppLogo.png')} // Path to your logo image
            style={{ width: 120, height: 45, resizeMode: 'contain' }} // Adjust dimensions as needed
            />
          ),
          headerTitle: '' ,
        }
      } /> 
      <Stack.Screen name = "shares/getShares" options={
        {
          headerStyle: {
            backgroundColor: '#1E293B', // Dark blue-gray background to match the app's gradient
          },
          headerShadowVisible: false, // Removes the shadow for a cleaner look
          headerLeft: () => (
            <Image 
            source={require('../assets/images/AppLogo.png')} // Path to your logo image
            style={{ width: 120, height: 45, resizeMode: 'contain' }} // Adjust dimensions as needed
            />
          ),
          headerTitle: '' ,
        }
      } /> 
      <Stack.Screen name = "shares/landing" options={
        {
          headerStyle: {
            backgroundColor: '#1E293B', // Dark blue-gray background to match the app's gradient
          },
          headerShadowVisible: false, // Removes the shadow for a cleaner look
          headerLeft: () => (
            <Image 
            source={require('../assets/images/AppLogo.png')} // Path to your logo image
            style={{ width: 120, height: 45, resizeMode: 'contain' }} // Adjust dimensions as needed
            />
          ),
          headerTitle: '' ,
        }
      } /> 
      <Stack.Screen name = "shares/message" options={
        {
          headerStyle: {
            backgroundColor: '#1E293B', // Dark blue-gray background to match the app's gradient
          },
          headerShadowVisible: false, // Removes the shadow for a cleaner look
          headerLeft: () => (
            <Image 
            source={require('../assets/images/AppLogo.png')} // Path to your logo image
            style={{ width: 120, height: 45, resizeMode: 'contain' }} // Adjust dimensions as needed
            />
          ),
          headerTitle: '' ,
        }
      } /> 
      <Stack.Screen name = "munaskha/index" options={
        {
          headerStyle: {
            backgroundColor: '#1E293B', // Dark blue-gray background to match the app's gradient
          },
          headerShadowVisible: false, // Removes the shadow for a cleaner look
          headerLeft: () => (
            <Image 
            source={require('../assets/images/AppLogo.png')} // Path to your logo image
            style={{ width: 120, height: 45, resizeMode: 'contain' }} // Adjust dimensions as needed
            />
          ),
          headerTitle: '' ,
        }
      } /> 
      <Stack.Screen name = "selectLanguages/index" options={
        {
          headerStyle: {
            backgroundColor: '#1E293B', // Dark blue-gray background to match the app's gradient
          },
          headerShadowVisible: false, // Removes the shadow for a cleaner look
          headerLeft: () => (
            <Image 
            source={require('../assets/images/AppLogo.png')} // Path to your logo image
            style={{ width: 120, height: 45, resizeMode: 'contain' }} // Adjust dimensions as needed
            />
          ),
          headerTitle: '' ,
        }
      } /> 
      <Stack.Screen name = "fidya/index" options={
        {
          headerStyle: {
            backgroundColor: '#1E293B', // Dark blue-gray background to match the app's gradient
          },
          headerShadowVisible: false, // Removes the shadow for a cleaner look
          headerLeft: () => (
            <Image 
            source={require('../assets/images/AppLogo.png')} // Path to your logo image
            style={{ width: 120, height: 45, resizeMode: 'contain' }} // Adjust dimensions as needed
            />
          ),
          headerTitle: '' ,
        }
      } /> 
    </Stack>

    <Toast />
  </>
    
  );
}