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
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>‹ Volver</Text>
        </Pressable>

        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        <View style={styles.details}>
          <Text style={styles.title}>{title ?? "Detalle"}</Text>
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
    backgroundColor: "#b9e4fd",
  },
  content: {
    paddingBottom: 30,
    paddingTop: 15
  },
  backButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backText: {
    color: "#1261a0",
    fontSize: 17,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 280,
  },
  details: {
    padding: 20,
  },
  title: {
    color: "#111827",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 12,
  },
  description: {
    color: "#374151",
    fontSize: 16,
    lineHeight: 24,
  },
});
