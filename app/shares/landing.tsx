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

export default function Shares() {
const [totalAmount, setTotalAmount] = useState(0);
const [tajheez, setTajheez] = useState(0);
const [qarza, setQarza] = useState(0);
const [wasiyat, setWasiyat] = useState(0);

function HandleData(){
  const remainingAmount = Number(totalAmount) - (Number(tajheez) + Number(qarza) + Math.min(Number(wasiyat), Number(totalAmount) / 3));

  if(remainingAmount <= 0)
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
            Islamic Inheritance Shares
          </Text>
          <Text className="text-slate-300 text-center mb-16">
            Calculate according to Sharia law
          </Text>

          {/* Total Amount Section */}
          <View className="mb-8 bg-slate-800/50 rounded-2xl p-5 shadow-lg flex-1 flex-col gap-5">
            <Text className="text-white text-md font-semibold mb-3">
              Total Amount Left:
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={totalAmount}
              onChangeText={setTotalAmount}
              keyboardType="numeric"
            />

            <Text className="text-white text-md font-semibold mb-3">
              Amount spent on Tajheez o Takfeen:
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={tajheez}
              onChangeText={setTajheez}
              keyboardType="numeric"
            />

            <Text className="text-white text-md font-semibold mb-3">
              Amount spent on Qarza:
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={qarza}
              onChangeText={setQarza}
              keyboardType="numeric"
            />

            <Text className="text-white text-md font-semibold mb-3">
              Amount spent on Nifaz e Wasiyat:
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
              placeholder="0"
              placeholderTextColor="#94a3b8" 
              value={wasiyat}
              onChangeText={setWasiyat}
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
                        Tarkha
                      </Text>
                    </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}