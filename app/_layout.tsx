import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name = "index" options={
        {title: "Home"}
      } /> 
      <Stack.Screen name = "shares/index" options={
        {title: "Shares"}
      } /> 
      <Stack.Screen name = "shares/getShares" options={
        {title: "Shares"}
      } /> 
      <Stack.Screen name = "shares/landing" options={
        {title: "Shares"}
      } /> 
    </Stack>
  );
}
