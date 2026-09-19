import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import AppTabs from '@/components/app-tabs';
import { useEffect, useState } from 'react';
import { CustomSplashScreen } from '@/components/CustomSplashScreen';

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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppTabs />
      {showSplash && (
        <CustomSplashScreen
          isReady={appIsReady}
          onAnimationFinish={() => setShowSplash(false)}
        />
      )}
    </ThemeProvider>
  );
}


