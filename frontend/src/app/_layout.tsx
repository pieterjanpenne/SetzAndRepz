import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Home" options={{ title: "Workouts" }} />
      <Stack.Screen name="screens/Profile" options={{ title: "Profile" }} />
      <Stack.Screen
        name="modals/WorkoutDetail"
        options={{ presentation: "modal", title: "Workout Details" }}
      />
    </Stack>
  );
}
