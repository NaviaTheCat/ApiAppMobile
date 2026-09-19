import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  StyleProp, 
  ViewStyle,
  Pressable
} from 'react-native';

export interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  badge?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  badge,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity 
      style={[styles.cardContainer, style]} 
      activeOpacity={0.85}
      onPress={onPress}
      disabled={!onPress}
    >
      {/* Imagen Superior */}
      {imageUrl && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
         
        </View>
      )}

      {/* Contenido */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        
        {/* {onPress && (
          <View style={styles.footer}>
            <Pressable
            onPress={onPress}
             style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
            >
              <Text style={styles.buttonText}>Detalles</Text>
              </Pressable>
          </View>
        )}*/}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#e4f6ff',
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: 'hidden',
    // Sombras iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Sombra Android
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
    height: 180,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6B7280',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    alignItems: 'flex-start',
    marginTop: 4,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },

   button: {
    backgroundColor: '#00a2ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonPressed: {
    backgroundColor: '#0051a8',
    opacity: 0.9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});