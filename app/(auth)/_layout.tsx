import { Stack } from 'expo-router';
import { Redirect } from 'expo-router';

export default function AuthLayout() {
  const isAuth = false;

  if (isAuth) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
    </Stack>
  );
}