import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { CustomSplashScreen } from "@/components/CustomSplashScreen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function TabLayout() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    async function prepare() {
      try {
        // Carga de recursos (fuentes, tokens, peticiones iniciales)
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        // Ocultamos la splash nativa de Expo para dar paso a la animada
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ headerShown: false }} />
      </Stack>
      {showSplash && (
        <CustomSplashScreen
          isReady={appIsReady}
          onAnimationFinish={() => setShowSplash(false)}
        />
      )}
    </ThemeProvider>
  );
}
