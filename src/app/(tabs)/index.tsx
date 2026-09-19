import { Card } from "@/components/Card";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Personajes</Text>

        <Card
          title="Una Card"
          imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
          description="Explora todos los detalles de este personaje y descubre más información."
          onPress={() =>
            router.push({
              pathname: "/details",
              params: {
                title: "Una Card",
                imageUrl:
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600",
                description:
                  "Explora todos los detalles de este personaje y descubre más información.",
              },
            })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9e4fd",
  },
  scrollContent: {
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 10,
    color: "#111827",
  },
});
