import { Card } from "@/components/Card";
import { getMonsters, Monster } from "@/service/api";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMonsters() {
      try {
        const data = await getMonsters();
        setMonsters(data);
      } catch (error) {
        setError("No se pudieron cargar los datos de la API") 
      } finally {
        setLoading(false)
      }
    }
    loadMonsters();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large"/>;
  }

  if (error) {
    return <Text>{error}</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Monstruos de TLOZ</Text>

        {monsters.map((monsters) => (

        <Card
        key={monsters.id}
          title={monsters.name}
          imageUrl={monsters.image}
          description={monsters.description}
          onPress={() =>
            router.push({
              pathname: "/details",
              params: {
                title: monsters.name,
                imageUrl: monsters.image,
                description: monsters.description,
              },
            })
          }
        />
        ))}
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
