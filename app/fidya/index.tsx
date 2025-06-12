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

export default function fidya() {

    const [amount, setAmount] = useState('');
    const[years, setYears] = useState('');
    const [TotalAmount, setTotalAmount] = useState(0);
    const [TotalRoza, setTotalRoza] = useState(0);
    const [showResult, setShowResult] = useState(false);

const { t } = useTranslation();

function HandleData() 
{
    if (amount === '' || years === '') {
        Toast.show({
        type: 'error',
        text1: "Please fill all fields",
        });
        return;
    }
    if(amount.includes(',') || years.includes(',') || amount.includes(' ') || years.includes(' ') || amount.includes('-') || years.includes('-')) {
        Toast.show({
        type: 'error',
        text1: "Please enter valid numbers",
        });
        return;
    }
    let count = 0;
    for (let i = 0; i < amount.length; i++) 
    {
        if(amount[i] === '.')
        {
            count++;
        }
    }
    if (count > 1) {
        Toast.show({
        type: 'error',
        text1: "Please enter a valid number",
        });
        return;
    }
    count = 0;
    for(let i = 0; i < years.length; i++)
    {
        if(years[i] === '.')
        {
            count++;
        }
    }
    if (count > 0) {
        Toast.show({
        type: 'error',
        text1: "Please enter a valid number",
        });
        return;
    }
    
    const amountValue = Number(amount);
    const yearsValue = Number(years);
    
    if (isNaN(amountValue) || isNaN(yearsValue)) {
        Toast.show({
        type: 'error',
        text1: t('error'),
        text2: t('please_enter_valid_numbers'),
        });
        return;
    }
    
    let OneYearNamaz = 2190;
    let TotalNamaz = OneYearNamaz * yearsValue;
    setTotalAmount(TotalNamaz * amountValue);

    let OneYearRoza = 30;
    let TotalRoza = OneYearRoza * yearsValue;
    setTotalRoza(TotalRoza * amountValue);

    setShowResult(true);
}



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
              Enter The Amount To Be Taken
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
               
              value={amount.toString()}
              onChangeText={(text) => setAmount(text)} 
              keyboardType="numeric"
            />

            <Text className="text-white text-md font-semibold mb-3">
              Enter The number of years
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
               
              value={years.toString()}
              onChangeText={(text) => setYears(text)}
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
                        {t('enter')}
                      </Text>
                    </TouchableOpacity>
        </View>
        {showResult && (
            <View className="mb-8 rounded-3xl bg-slate-800/70 p-6 shadow-xl w-full max-w-md">
                <Text className="text-white text-2xl font-bold mb-4 text-center  pb-2">
                💳 Total Amount on Namaz
                </Text>
                <Text className="text-purple-300 text-3xl font-extrabold text-center mb-6 border-b border-slate-600 pb-2">
                Rs. {TotalAmount}
                </Text>

                <Text className="text-white text-2xl font-bold mb-4 text-center  pb-2">
                🕌 Total Amount on Roza
                </Text>
                <Text className="text-emerald-300 text-3xl font-bold text-center mb-4">
                Rs. {TotalRoza}
                </Text>

                <View className="h-[1px] bg-slate-600 my-4" />

                <Text className="text-white text-xl font-semibold text-center">
                🧾 Grand Total
                </Text>
                <Text className="text-yellow-300 text-3xl font-extrabold text-center mt-2">
                Rs. {TotalAmount + TotalRoza}
                </Text>
            </View>
            )}

            <View className='mb-10'></View>

      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}