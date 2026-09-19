import * as Device from 'expo-device';
import { Platform, StyleSheet,Alert, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/Card';

export default function HomeScreen() {
  const handlePress = (title: string): void => {
    Alert.alert('Seleccionado', title);}
  return (
 <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Personajes</Text>

        <Card
          title="Una Card"
          imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
          onPress={() => handlePress("Has precionado la tarjeta")}
        />

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9e4fd',
  },
  scrollContent: {
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 10,
    color: '#111827',
  },
});
