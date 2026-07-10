import { Feather } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';

/**
 * The "✕ Close chat" pill centered at the top of the voice and chat
 * screens.
 */
export function CloseChatPill({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Close chat"
      onPress={onPress}
      className="h-11 flex-row items-center gap-2 self-center rounded-full bg-surface-chip px-5 active:opacity-70">
      <Feather name="x" size={16} color="#F5EDE6" />
      <Text className="font-inter-medium text-[15px] text-content-primary">Close chat</Text>
    </Pressable>
  );
}
