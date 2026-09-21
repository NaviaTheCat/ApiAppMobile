import { Card } from "@/components/Card";
import { getMonsters, Monster } from "@/service/api";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadMonsters = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getMonsters();
      setMonsters(data);
    } catch (err) {
      setError("No se pudieron cargar los datos de la API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMonsters();
  }, []);

  // Estado de Carga
  if (loading) {
    return (
      <SafeAreaView style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#38BDF8" />
        <Text style={styles.loadingText}>Cargando compendio...</Text>
      </SafeAreaView>
    );
  }

  // Estado de Error
  if (error) {
    return (
      <SafeAreaView style={[styles.container, styles.centered]}>
        <View style={styles.errorCard}>
          <Text style={styles.errorTitle}>¡Error de conexión!</Text>
          <Text style={styles.errorText}>{error}</Text>
          <Pressable style={styles.retryButton} onPress={loadMonsters}>
            <Text style={styles.retryText}>Reintentar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Encabezado Principal */}
        <View style={styles.header}>
          <Text style={styles.subtitle}>Compendio de Hyrule</Text>
          <Text style={styles.headerTitle}>Monstruos de TLOZ</Text>
          
        </View>

        {/* Lista de Monstruos */}
        <View style={styles.cardsContainer}>
          {monsters.map((monster) => (
            <Card
              key={monster.id}
              title={monster.name}
              imageUrl={monster.image}
              onPress={() =>
                router.push({
                  pathname: "/details",
                  params: {
                    title: monster.name,
                    imageUrl: monster.image,
                    description: monster.description,
                  },
                })
              }
            />
          ))}
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
  centered: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 20,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#38BDF8", // Cyan brillante
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#F8FAFC",
    letterSpacing: -0.5,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(56, 189, 248, 0.12)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.3)",
    marginTop: 10,
  },
  cardsContainer: {
    gap: 16,
  },
  loadingText: {
    marginTop: 14,
    fontSize: 15,
    color: "#94A3B8",
    fontWeight: "500",
  },
  errorCard: {
    backgroundColor: "#1E293B",
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#334155",
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F8FAFC",
    marginBottom: 8,
  },
  errorText: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: "#0284C7",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 12,
  },
  retryText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});