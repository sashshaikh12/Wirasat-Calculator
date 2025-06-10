import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';

export default function selectLanguages() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LinearGradient
      colors={['#0F172A', '#1E293B', '#334155']}
      className="flex-1 px-6"
    >
      <SafeAreaView className="flex-1">
        <ScrollView 
          className='flex-1' 
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <View className="w-full max-w-md my-auto ">
            <Text className="text-white text-3xl font-bold text-center mb-12">
              {t('select_language')}
            </Text>
            
            <View className="space-y-6 w-full">
              <TouchableOpacity
                onPress={() => changeLanguage('en')}
                activeOpacity={0.7}
                className="rounded-xl overflow-hidden shadow-lg mb-10"
              >
                <LinearGradient
                  colors={['#7C3AED', '#6D28D9']}
                  className="flex-row items-center justify-between px-6 py-5"
                >
                  <Text className="text-white text-xl font-semibold">English</Text>
                  <AntDesign name="right" size={20} color="white" />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => changeLanguage('ur')}
                activeOpacity={0.7}
                className="rounded-xl overflow-hidden shadow-lg mb-10"
              >
                <LinearGradient
                  colors={['#7C3AED', '#6D28D9']}
                  className="flex-row items-center justify-between px-6 py-5"
                >
                  <Text className="text-white text-xl font-semibold">اردو</Text>
                  <AntDesign name="right" size={20} color="white" />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => changeLanguage('hi')}
                activeOpacity={0.7}
                className="rounded-xl overflow-hidden shadow-lg mb-10"
              >
                <LinearGradient
                  colors={['#7C3AED', '#6D28D9']}
                  className="flex-row items-center justify-between px-6 py-5"
                >
                  <Text className="text-white text-xl font-semibold">हिंदी</Text>
                  <AntDesign name="right" size={20} color="white" />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => changeLanguage('ur-Latn')}
                activeOpacity={0.7}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <LinearGradient
                  colors={['#7C3AED', '#6D28D9']}
                  className="flex-row items-center justify-between px-6 py-5"
                >
                  <Text className="text-white text-xl font-semibold">Roman Urdu</Text>
                  <AntDesign name="right" size={20} color="white" />
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}