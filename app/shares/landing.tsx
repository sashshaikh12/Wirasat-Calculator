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

  let temp = Number(totalAmount) - (Number(tajheez) + Number(qarza));

  const remainingAmount = Number(totalAmount) - (Number(tajheez) + Number(qarza) + Math.min(Number(wasiyat), temp / 3));
 

  if(Number(totalAmount) === 0 && Number(tajheez) === 0 && Number(qarza) === 0 && Number(wasiyat) === 0) 
  {
    router.push({
      pathname: 'shares',
      params: {
        remainingAmount,
        tajheez: 0,
        qarza: 0,
        wasiyat: 0,
      },
    });
    return;
  }

  else if(Number(totalAmount) === 0 && (Number(tajheez) !== 0 || Number(qarza) !== 0 || Number(wasiyat) !== 0)) 
  {
    router.push({
      pathname: '/shares/message',
      params: {
        message: 'totalAmountZero',
      },
    });
    return;
  }
  else if(Number(totalAmount) <= Number(tajheez))
  {
    router.push({
      pathname: '/shares/message',
      params: {
        message: 'totalEqualTajheez',
      },
    });
    return;
  }
  else if((Number(totalAmount) === (Number(tajheez) + Number(qarza))) && (Number(tajheez) !== 0))
  {
    router.push({
      pathname: '/shares/message',
      params: {
        message: 'totalEqualTajheez_Qarza',
      },
    });
    return;
  }
  else if((Number(totalAmount) > Number(tajheez)) && ((Number(totalAmount) - Number(tajheez)) < Number(qarza)) && Number(tajheez) !== 0)
  {
    router.push({
      pathname: '/shares/message',
      params: {
        message: 'tajheezFullIncompleteQarza',
      },
    });
    return;
  }
  else if((Number(totalAmount) === Number(qarza)) && (Number(tajheez) === 0))
  {
    router.push({
      pathname: '/shares/message',
      params: {
        message: 'totalEqualQarza',
      },
    });
    return;
  }
  else if((Number(totalAmount) < Number(qarza)) && (Number(tajheez) === 0))
  {
    router.push({
      pathname: '/shares/message',
      params: {
        message: 'totalLessQarza',
      },
    });
    return;
  }
  else 
  {
    router.push({
      pathname: 'shares',
      params: {
        remainingAmount,
        tajheez: Number(tajheez),
        qarza: Number(qarza),
        wasiyat: Math.min(Number(wasiyat), temp / 3),
      },
    });
  }
  
};


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
          <Text className="text-slate-300 text-center mb-16">
            {t('caption')}
          </Text>

          {/* Total Amount Section */}
          <View className="mb-12 rounded-2xl p-5 shadow-lg flex-1 flex-col gap-5" style = {{
            backgroundColor: '#07142B',
          }}>
            <Text className="text-white text-md font-semibold mb-3">
              {t('totalAmountLeft')}
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-5"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={totalAmount.toString()}
              onChangeText={(text) => setTotalAmount(text)} 
              keyboardType="numeric"
              style={{ 
                borderColor: '#173C4C'
              }}
            />

            <Text className="text-white text-md font-semibold mb-3">
              {t('tajheez')}
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-5"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={tajheez.toString()}
              onChangeText={(text) => setTajheez(text)}
              keyboardType="numeric"
              style={{ 
                borderColor: '#173C4C'
              }}
            />

            <Text className="text-white text-md font-semibold mb-3">
              {t('qarza')}
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-5"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={qarza.toString()}
              onChangeText={(text) => setQarza(text)}
              keyboardType="numeric"
              style={{ 
                borderColor: '#173C4C'
              }}
            />

            <Text className="text-white text-md font-semibold mb-3">
              {t('nifaz')}
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-5"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={wasiyat.toString()}
              onChangeText={(text) => setWasiyat(text)}
              keyboardType="numeric"
              style={{ 
                borderColor: '#173C4C'
              }}
            />
          </View>
          <TouchableOpacity 
                      className="mb-8 rounded-2xl overflow-hidden shadow-md"
                      activeOpacity={0.8}
                      onPress={() => {
                        HandleData();
                      }}
                     
                    >
                      <View
                        className="flex-row items-center justify-center px-6 py-4"
                        style={{
                          backgroundColor: '#07142B', // Set the background color here
                          borderBottomWidth: 8,
                          borderBottomColor: '#000009', 
                          borderTopWidth: 12,
                          borderTopColor: '#123456',
                        }}
                      >

                      <Text className="text-white text-lg font-semibold ml-1 px-12 py-3">
                        {t('tarkah')}
                      </Text>
                    </View>
                    </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}