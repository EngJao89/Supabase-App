import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>

        <Stack.Screen name="(auth)/signup/page" options={{headerShown: false}}/>

        <Stack.Screen name="(panel)/profile/page" options={{headerShown: false}}/>
      </Stack>

      <StatusBar style="dark" />
    </>
  )
}
