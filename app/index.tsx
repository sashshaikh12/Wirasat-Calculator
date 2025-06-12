import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { t } from 'i18next';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';


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
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false} // Hides the vertical scrollbar
  showsHorizontalScrollIndicator={false} contentContainerStyle={{
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  }}>
          <View className=" p-8 w-full max-w-md 
                          my-auto"
                         >
          {/* App Header */}
          <View className="mb-8">
            <Text className="text-white text-4xl font-bold text-center mb-2">
              {t('wirasat_app')}
            </Text>
            <Text className="text-gray-200 text-base text-center">
              {t('caption')}
            </Text>
          </View>

          {/* Menu Buttons */}
          <MenuButton title={t('button1')} iconName="pie-chart" onPress={() => router.push('shares/landing')} />
          <MenuButton title={t('button2')} iconName="book" />
          <MenuButton title={t('button3')} iconName="slideshare" onPress={() => router.push('munaskha')} />
          <MenuButton title={t('button4')} iconName="globe" onPress={() => router.push('selectLanguages')}/>
          <MenuButton title="Fidya" iconName="envelope" onPress={() => router.push('fidya')} />
          <MenuButton title="Books" iconName="envelope" />
        </View>
      </ScrollView>
    </SafeAreaView>
      </LinearGradient>
  );
}