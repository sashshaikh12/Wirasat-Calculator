import { LinearGradient } from 'expo-linear-gradient';
import { router , useLocalSearchParams} from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';

export default function message() {

  const { t } = useTranslation();
  const params = useLocalSearchParams();
  


  return (
  <LinearGradient 
    colors={['#1f4037', '#99f2c8']} 
    className="flex-1"
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 p-6"  >
        <View className="mt-4 mb-8">
          <Text className="text-white text-3xl font-bold mb-2 text-center">
            {t('wirasat_app')}
          </Text>
          <Text className="text-slate-300 text-center mb-12">
            {t('caption')}
          </Text>
        </View>

        {params.message === 'tajheezFullIncompleteQarza' && (
          <>
            <View className='mb-12 rounded-2xl p-5 shadow-lg flex-1 flex-col gap-5' style = {{
            backgroundColor: '#07142B',
          }}>
              <Text className="text-white text-lg font-bold text-center">
                {t('tajheezFullIncompleteQarza.para1')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('tajheezFullIncompleteQarza.para2')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('tajheezFullIncompleteQarza.para3')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('tajheezFullIncompleteQarza.para4')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('tajheezFullIncompleteQarza.formula')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('tajheezFullIncompleteQarza.para5')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('tajheezFullIncompleteQarza.para6')}
              </Text>
            </View>
          </>
        )}

        {params.message === 'totalLessQarza' && (
          <>
            <View className='mb-12 rounded-2xl p-5 shadow-lg flex-1 flex-col gap-5' style = {{
            backgroundColor: '#07142B',
          }}>
              <Text className="text-white text-lg font-bold text-center">
                {t('totalLessQarza.para1')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('totalLessQarza.para2')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('totalLessQarza.para3')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('totalLessQarza.para4')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('totalLessQarza.formula')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('totalLessQarza.para5')}
              </Text>
              <Text className="text-white text-lg font-bold text-center">
                {t('totalLessQarza.para6')}
              </Text>
            </View>
          </>
        )}

        {params.message !== "tajheezFullIncompleteQarza" && params.message !== "totalLessQarza" && (
          <>
            <View className='mb-12 rounded-2xl p-5 shadow-lg flex-1 flex-col gap-5' style = {{
              backgroundColor: '#07142B',
            }}>
              <Text className="text-white text-lg font-bold text-center">
                {t(params.message) || ""}
              </Text>
            </View>
          </>
        )}
      
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}