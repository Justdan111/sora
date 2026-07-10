import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CloseChatPill } from '@/components/close-chat-pill';
import { GlowBackground } from '@/components/glow-background';
import { Orb } from '@/components/orb';

export default function VoiceScreen() {
  const pulse = useSharedValue(1);

  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1.05, { duration: 1400, easing: Easing.inOut(Easing.quad) }),
      -1,
      true
    );
  }, [pulse]);

  const orbStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
  }));

  return (
    <View className="flex-1 bg-[#060302]">
      <GlowBackground />
      <SafeAreaView className="flex-1">
        <View className="pt-2">
          <CloseChatPill onPress={() => router.back()} />
        </View>

        {/* Listening orb */}
        <View className="items-center pt-8">
          <Animated.View style={orbStyle}>
            <Orb size={250} glow />
          </Animated.View>
          <Text className="-mt-4 font-inter text-[13px] text-content-faint">
            Aira is listening....
          </Text>
        </View>

        <View className="flex-1" />

        {/* Live transcript: the words just spoken stay white, the tail fades */}
        <Text className="px-9 text-center font-inter-medium text-[26px] leading-[34px] tracking-[-0.3px]">
          <Text className="text-content-primary">Deploy an autonomous AI agent to monitor liquidity </Text>
          <Text className="text-content-muted">pools. Make it a tactical trading bot.</Text>
        </Text>

        <View className="flex-1" />

        {/* Controls */}
        <View className="mb-6 flex-row items-center justify-center gap-14">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Pause recording"
            className="h-11 w-11 items-center justify-center rounded-full border border-white/25 active:opacity-70">
            <Feather name="pause" size={16} color="rgba(255, 240, 228, 0.8)" />
          </Pressable>

          <View className="h-[120px] w-[120px] items-center justify-center rounded-full border border-hairline bg-white/5">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Stop recording"
              onPress={() => router.replace('/chat')}
              className="active:opacity-85"
              style={{
                borderRadius: 46,
                shadowColor: '#FF6B00',
                shadowOpacity: 0.6,
                shadowRadius: 18,
                shadowOffset: { width: 0, height: 4 },
                elevation: 12,
              }}>
              <LinearGradient
                colors={['#FF9330', '#E85300']}
                start={{ x: 0.3, y: 0 }}
                end={{ x: 0.7, y: 1 }}
                style={{
                  width: 92,
                  height: 92,
                  borderRadius: 46,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Feather name="mic" size={30} color="#FFFFFF" />
              </LinearGradient>
            </Pressable>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Send transcript"
            onPress={() => router.replace('/chat')}
            className="h-11 w-11 items-center justify-center active:opacity-70">
            <Feather name="send" size={22} color="rgba(255, 240, 228, 0.8)" />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
