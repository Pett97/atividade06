// app/telaCarrinho/_layout.tsx
import { View, Text, StyleSheet } from 'react-native';
import { ReactNode } from 'react';  
import { Stack } from 'expo-router';
import { PRIMARY_COLOR } from '../../src/constants/globalStyles';

interface TelaCarrinhoLayoutProps {
  children: ReactNode;  
}

export default function TelaCarrinhoLayout({ children }: TelaCarrinhoLayoutProps) {
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
      <View style={styles.container}>
      {children}
    </View>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
