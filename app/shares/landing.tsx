import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
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

export default function landing() {
const [totalAmount, setTotalAmount] = useState("");
const [tajheez, setTajheez] = useState("");
const [qarza, setQarza] = useState("");
const [wasiyat, setWasiyat] = useState("");

const { t } = useTranslation();

function CountDots(s)
{
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '.') {
      count++;
    }
  }
  return count > 1;
}

function HandleData(){

  if(totalAmount.includes(',') || tajheez.includes(',') || qarza.includes(',') || wasiyat.includes(',') || totalAmount.includes('-') || tajheez.includes('-') || qarza.includes('-') || wasiyat.includes('-') || totalAmount.includes(' ') || tajheez.includes(' ') || qarza.includes(' ') || wasiyat.includes(' ')) {
    Toast.show({
      type: 'error',
      text1: "Please remove commas,space,minus from the input values.",
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 40,
    });
    return;
  }

  let count = false;
  count = CountDots(totalAmount) || CountDots(tajheez) || CountDots(qarza) || CountDots(wasiyat);
  if (count) {
    Toast.show({
      type: 'error',
      text1: "Please enter a valid number without multiple decimal points.",
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 40,
    });
    return;
  }

  const remainingAmount = Number(totalAmount) - (Number(tajheez) + Number(qarza) + Math.min(Number(wasiyat), Number(totalAmount) / 3));
  
  if(remainingAmount < 0)
  {
    router.push('shares/message');
  }
  else 
  {
    router.push({
      pathname: 'shares',
      params: {
        remainingAmount,
      },
    });
  }
};


  return (
  <LinearGradient 
    colors={['#0F172A', '#1E293B', '#334155']} 
    className="flex-1"
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 p-6"  >
        <View className="mt-4 mb-8">
          <Text className="text-white text-3xl font-bold mb-2 text-center">
            {t('islamic_inheritance_shares')}
          </Text>
          <Text className="text-slate-300 text-center mb-16">
            {t('islamic_inheritance_shares_description')}
          </Text>

          {/* Total Amount Section */}
          <View className="mb-8 bg-slate-800/50 rounded-2xl p-5 shadow-lg flex-1 flex-col gap-5">
            <Text className="text-white text-md font-semibold mb-3">
              {t('totalAmountLeft')}
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={totalAmount.toString()}
              onChangeText={(text) => setTotalAmount(text)} 
              keyboardType="numeric"
            />

            <Text className="text-white text-md font-semibold mb-3">
              {t('tajheez')}
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={tajheez.toString()}
              onChangeText={(text) => setTajheez(text)}
              keyboardType="numeric"
            />

            <Text className="text-white text-md font-semibold mb-3">
              {t('qarza')}
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={qarza.toString()}
              onChangeText={(text) => setQarza(text)}
              keyboardType="numeric"
            />

            <Text className="text-white text-md font-semibold mb-3">
              {t('nifaz')}
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={wasiyat.toString()}
              onChangeText={(text) => setWasiyat(text)}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity 
                      className="bg-purple-600 rounded-xl px-6 py-4 mt-6 shadow-xl mb-16"
                      activeOpacity={0.8}
                      onPress={() => {
                        HandleData();
                      }}
                    >
                      <Text className="text-white text-center font-semibold text-xl">
                        {t('tarkah')}
                      </Text>
                    </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}