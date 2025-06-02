import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// Reusable menu button component
const MenuButton = ({ title, onPress }: { title: string, onPress?: () => void }) => (
  <TouchableOpacity 
    className="bg-purple-600 mb-4 px-6 py-4 rounded-xl active:opacity-70 
               shadow-lg border border-purple-500/30"
    onPress={onPress}
  >
    <Text className="text-white text-lg font-medium text-center">
      {title}
    </Text>
  </TouchableOpacity>
);

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient 
        colors={['#0F172A', '#1E293B', '#334155']} 
        className="flex-1 justify-center items-center px-6"
      >
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
          <MenuButton 
            title="Shares And Money Distribution" 
            onPress={() => router.push('shares')}
          />
          <MenuButton title="Rules" />
          <MenuButton title="Munaskha" />
          <MenuButton title="Learning" />
          <MenuButton title="Language" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}