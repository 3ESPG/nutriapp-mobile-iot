import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Logo } from '@/components';
import { colors } from '@/constants';
import { useAppFonts } from '@/hooks';

export default function RootLayout() {
  const fontsReady = useAppFonts();

  if (!fontsReady) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' }}>
        <Logo size={88} variant="inverse" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="refeicao/adicionar" options={{ presentation: 'modal' }} />
        <Stack.Screen name="receita/[id]" />
      </Stack>
    </SafeAreaProvider>
  );
}
