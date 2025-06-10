import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Reusable button with icon
const MenuButton = ({
  title,
  onPress,
  iconName,
}: {
  title: string;
  onPress?: () => void;
  iconName: keyof typeof FontAwesome.glyphMap;
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    className="mb-8 rounded-2xl overflow-hidden shadow-md"
  >
    <View
      className="flex-row items-center justify-start px-6 py-4 bg-purple-700/90 border-b-8 border-b-purple-950 border-t-8 border-t-purple-500"
      style={{
        
      }}
    >
      <FontAwesome name={iconName} size={45} color="white" />
      <Text className="text-white text-lg font-semibold ml-1 px-12 py-3">
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
    <SafeAreaView className="flex-1">
      <ScrollView className='flex-1' contentContainerStyle={{
    justifyContent: 'center',
    alignItems: 'center',
  }}>
          <View className=" p-8 w-full max-w-md 
                          my-auto"
                         >
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
          <MenuButton title="Shares And Money Distribution" iconName="pie-chart" onPress={() => router.push('shares/landing')} />
          <MenuButton title="Rules" iconName="book" />
          <MenuButton title="Munaskha" iconName="slideshare" onPress={() => router.push('munaskha')} />
          <MenuButton title="Language" iconName="globe" />
        </View>
      </ScrollView>
    </SafeAreaView>
      </LinearGradient>
  );
}
