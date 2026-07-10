import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GradientBackground } from '@/components/gradient-background';
import { IconButton } from '@/components/icon-button';
import { LogoMark } from '@/components/logo-mark';
import { PromptPanel } from '@/components/prompt-panel';
import { SuggestionCard } from '@/components/suggestion-card';

const SUGGESTIONS = [
  'Deploy autonomous agent',
  'Optimize gas for ZK-proofs',
  'Audit DeFi protocol',
  'Stress-test smart contracts',
];

export default function HomeScreen() {
  const [prompt, setPrompt] = useState('');

  return (
    <View className="flex-1 bg-ember-night">
      <GradientBackground />
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          {/* Header */}
          <View className="flex-row items-center gap-3 px-5 pt-2">
            <LogoMark size={46} />
            <View>
              <Text className="font-inter text-[15px] leading-[20px] text-content-muted">
                Roobinium,
              </Text>
              <Text className="font-inter-medium text-[15px] leading-[20px] text-content-primary">
                Welcome back
              </Text>
            </View>
            <View className="flex-1" />
            <IconButton accessibilityLabel="Notifications">
              <Feather name="bell" size={19} color="#F5EDE6" />
            </IconButton>
            <IconButton accessibilityLabel="Menu">
              <Feather name="list" size={19} color="#F5EDE6" />
            </IconButton>
          </View>

          <View className="flex-1" />

          {/* Headline */}
          <Text className="px-6 pb-6 font-inter-semibold text-[42px] leading-[47px] tracking-tight text-content-primary">
            What are we{'\n'}building today?
          </Text>

          {/* Quick-prompt cards */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-4 grow-0"
            contentContainerClassName="gap-3 px-5">
            {SUGGESTIONS.map((label) => (
              <SuggestionCard key={label} label={label} onPress={setPrompt} />
            ))}
          </ScrollView>

          {/* Composer */}
          <View className="h-[36%]">
            <PromptPanel
              value={prompt}
              onChangeText={setPrompt}
              model="Opus 4.8"
              onSubmit={() => router.push('/chat')}
              onPressAttach={() => {}}
              onPressModel={() => {}}
              onPressMic={() => router.push('/voice')}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
