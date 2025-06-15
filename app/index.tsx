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
      className="flex-row items-center justify-start px-6 py-4"
      style={{
        backgroundColor: '#07142B', // Set the background color here
        borderBottomWidth: 8,
        borderBottomColor: '#000009', 
        borderTopWidth: 8,
        borderTopColor: '#123456',
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
        colors={['#1f4037', '#99f2c8']}
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
            <Text className="text-white text-4xl font-bold text-center mb-4 mt-4">
              {t('wirasat_app')}
            </Text>
            <Text className="text-gray-200 text-base text-center mb-6">
              {t('caption')}
            </Text>
          </View>

          {/* Menu Buttons */}
          <MenuButton title={t('button2')} iconName="book" />
          <MenuButton title={t('button4')} iconName="language" onPress={() => router.push('selectLanguages')}/>
          <MenuButton title={t('button1')} iconName="pie-chart" onPress={() => router.push('shares/landing')} />
          <MenuButton title={t('button3')} iconName="sitemap" onPress={() => router.push('munaskha')} />
          <MenuButton title={t('button8')} iconName="calculator" onPress={() => router.push('fidya')} />
          <MenuButton title={t('button5')} iconName="user-circle-o" />
          <MenuButton title={t('button7')} iconName="phone-square" />
          <MenuButton title={t('button9')} iconName="slideshare" />
          <MenuButton title={t('button6')} iconName="heart" />
          <MenuButton title={t('button10')} iconName="thumbs-o-up" />
        </View>
      </ScrollView>
    </SafeAreaView>
      </LinearGradient>
  );
}