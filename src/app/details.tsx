import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
  const { title, imageUrl, description } = useLocalSearchParams<{
    title?: string;
    imageUrl?: string;
    description?: string;
  }>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header con Imagen */}
        <View style={styles.imageContainer}>
          {imageUrl && (
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
          {/* Botón Flotante para Volver */}
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.backButtonPressed,
            ]}
          >
            <Text style={styles.backText}>‹</Text>
          </Pressable>
        </View>

        {/* Tarjeta de Contenido */}
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{title ?? "Detalle"}</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>
            {description ??
              "No hay información disponible para este personaje."}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1120", // Azul muy oscuro profundo
  },
  scrollContent: {
    paddingBottom: 40,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 320,
    backgroundColor: "#0F172A",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(15, 23, 42, 0.75)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  backButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  backText: {
    color: "#38BDF8", // Cyan neón para la flecha
    fontSize: 28,
    fontWeight: "600",
    marginTop: -2,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#1E293B", // Tarjeta azul medianoche
    marginTop: -24,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.2)", // Borde con tinte cyan
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 24,
    minHeight: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    color: "#F8FAFC",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  divider: {
    height: 3,
    width: 44,
    backgroundColor: "#38BDF8", // Línea de acento Cyan Neón
    borderRadius: 2,
    marginVertical: 18,
  },
  description: {
    color: "#CBD5E1", // Texto claro legible
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.2,
  },
});