import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";
import { SvgXml } from "react-native-svg";

interface CustomSplashScreenProps {
  isReady: boolean;
  onAnimationFinish: () => void;
}

export const CustomSplashScreen: React.FC<CustomSplashScreenProps> = ({
  isReady,
  onAnimationFinish,
}) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isReady) {
      // Animación de salida cuando la app está lista
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1.1,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onAnimationFinish();
      });
    }
  }, [isReady]);

  const joystickSvg = `
<svg width="100" height="100" viewBox="0 0 24 24">
  <path
    fill="#0c0c0c"
    d="M16 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2m2-2a1 1 0 1 0 0 2 1 1 0 1 0 0-2m-2-2a1 1 0 1 0 0 2 1 1 0 1 0 0-2m-2 2a1 1 0 1 0 0 2 1 1 0 1 0 0-2M8 8a2 2 0 1 0 0 4 2 2 0 1 0 0-4"
  />
  <path
    fill="#030303"
    d="M17 4H7C4.24 4 2 6.24 2 9v7.88a3.124 3.124 0 0 0 5.33 2.21l1.96-1.96c1.45-1.45 3.97-1.45 5.41 0l1.96 1.96c.59.59 1.37.91 2.21.91 1.72 0 3.12-1.4 3.12-3.12V9c0-2.76-2.24-5-5-5Zm3 12.88a1.118 1.118 0 0 1-1.91.79l-1.96-1.96c-1.1-1.1-2.56-1.71-4.12-1.71s-3.02.61-4.12 1.71l-1.96 1.96a1.118 1.118 0 0 1-1.91-.79V9c0-1.65 1.35-3 3-3h10c1.65 0 3 1.35 3 3v7.88Z"
  />
</svg>
`;
  return (
    <Animated.View
      style={[
        styles.splashContainer,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
      pointerEvents="none"
    >
      <SvgXml xml={joystickSvg} width={100} height={100} />
      <Text style={styles.title}>Hyrule Compendium App</Text>
      <Text style={styles.subtitle}>Encuentra tus personajes favoritos</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "#b9e4fd",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#4c4d50",
  },
});
