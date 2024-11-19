import { Stack } from 'expo-router';
import { PRIMARY_COLOR } from '../src/constants/globalStyles';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign:"center",
        headerStyle: {
          backgroundColor: PRIMARY_COLOR,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
    </Stack>
  );
}