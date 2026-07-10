import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, View } from 'react-native';

const noise = require('../../assets/images/noise.png');

/**
 * Dark backdrop for the voice and chat screens: near-black base with a
 * warm orange glow bleeding in from the top, a faint ember rising from
 * the bottom, and film grain.
 */
export function GlowBackground() {
  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: '#060302' }]} pointerEvents="none">
      <LinearGradient
        colors={['#B04A0F', 'rgba(96, 38, 8, 0.55)', 'rgba(6, 3, 2, 0)']}
        locations={[0, 0.14, 0.4]}
        style={StyleSheet.absoluteFill}
      />
      <LinearGradient
        colors={['rgba(6, 3, 2, 0)', 'rgba(88, 22, 4, 0.3)']}
        locations={[0.78, 1]}
        style={StyleSheet.absoluteFill}
      />
      <Image
        source={noise}
        resizeMode="repeat"
        style={[StyleSheet.absoluteFill, { width: '100%', height: '100%', opacity: 0.05 }]}
      />
    </View>
  );
}
