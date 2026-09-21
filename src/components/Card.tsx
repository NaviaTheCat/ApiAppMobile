import React from 'react';
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
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
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && styles.cardPressed,
        style,
      ]}
      onPress={onPress}
      disabled={!onPress}
    >
      {/* Contenedor de la Imagen */}
      {imageUrl && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          {badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
        </View>
      )}

      {/* Contenido de la Tarjeta */}
      <View style={styles.content}>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.arrowIcon}>›</Text>
        </View>

       
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1E293B', // Azul medianoche oscuro
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155', // Borde sutil para definir contorno
    overflow: 'hidden',
    // Sombras iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    // Sombra Android
    elevation: 6,
  },
  cardPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
    borderColor: '#38BDF8', // Brillo neón suave al presionar
  },
  imageContainer: {
    position: 'relative',
    height: 180,
    width: '100%',
    backgroundColor: '#0F172A',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#38BDF8',
  },
  badgeText: {
    color: '#38BDF8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  content: {
    padding: 18,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#38BDF8', // Cyan Neón
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#F8FAFC', // Blanco hielo
    flex: 1,
    letterSpacing: -0.3,
  },
  arrowIcon: {
    fontSize: 22,
    fontWeight: '600',
    color: '#38BDF8',
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#94A3B8', // Gris azulado tenue
    lineHeight: 20,
  },
});