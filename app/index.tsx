import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; // ✅ Feather is similar to Lucide and works with Expo

// Reusable button with icon
const MenuButton = ({
  title,
  onPress,
  iconName,
}: {
  title: string;
  onPress?: () => void;
  iconName: keyof typeof Feather.glyphMap;
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    className="mb-4 rounded-2xl overflow-hidden shadow-md"
  >
    <View
      className="flex-row items-center justify-start px-6 py-4 bg-purple-700/90 border border-purple-400/20"
      style={{
        gap: 12,
        borderRadius: 20,
        shadowColor: '#A855F7',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
      }}
    >
      <Feather name={iconName} size={22} color="white" />
      <Text className="text-white text-lg font-semibold ml-1">
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

export default function Index() {
  return (
    <LinearGradient
        colors={['#0F172A', '#1E293B', '#334155']}
        className="flex-1 px-6"
      >
    <SafeAreaView className="flex-1 justify-center items-center">
        <View className="bg-white/10 rounded-3xl p-8 w-full max-w-md 
                         shadow-xl border border-white/20">
          {/* App Header */}
          <View className="mb-8">
            <Text className="text-white text-4xl font-bold text-center mb-2">
              Wirasat App
            </Text>
            <Text className="text-gray-200 text-base text-center">
              Islamic Inheritance Calculator
            </Text>
          </View>

          {/* Menu Buttons */}
          <MenuButton title="Shares And Money Distribution" iconName="divide-square" onPress={() => router.push('shares/landing')} />
          <MenuButton title="Rules" iconName="book" />
          <MenuButton title="Munaskha" iconName="file-text" onPress={() => router.push('munaskha')} />
          <MenuButton title="Learning" iconName="book-open" />
          <MenuButton title="Language" iconName="globe" />
        </View>
    </SafeAreaView>
      </LinearGradient>
  );
}
