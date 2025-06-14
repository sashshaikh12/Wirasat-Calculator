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
import { MaterialIcons } from '@expo/vector-icons';

export default function fidya() {

    const [amount, setAmount] = useState('');
    const[years, setYears] = useState('');
    const [TotalAmount, setTotalAmount] = useState(0);
    const [TotalRoza, setTotalRoza] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isMale, setisMale] = useState(true);
    const [isFemale, setisFemale] = useState(false);

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
    const yearsValue = Number(years) - (isMale ? 12 : 9);
    
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

          <View className='mb-12 rounded-2xl p-5 shadow-lg flex-1 flex-col gap-5' style = {{
            backgroundColor: '#173C4C',
          }}>
            <Text className="text-white text-lg font-bold mb-8 text-center">
              {t('fidyaPara')}
            </Text>
          </View>

              <Text className="text-white text-2xl font-bold mb-8 text-center">
              {t('gender')}
            </Text>
          <View className="flex-row justify-between space-x-4 md:space-x-6 mb-16">

              {/* Male Button */}
              <TouchableOpacity 
                className={`rounded-lg px-4 py-3 w-36 md:w-40 flex-row items-center justify-center space-x-2  ${
                  isMale ? 'bg-blue-400/50' : 'bg-blue-600/80 active:bg-blue-700'
                }`}
                onPress={() => {
                  setisMale(true);
                  setisFemale(false);
                  
                }}
                disabled={isMale}
              >
                <MaterialIcons name="male" size={20} color={isMale ? "#d1d5db" : "white"} />
                <Text className={`text-lg font-semibold ${isMale ? 'text-gray-400' : 'text-white'}`}>
                  {t('male')}
                </Text>
              </TouchableOpacity>
              
              {/* Female Button */}
              <TouchableOpacity 
                className={`rounded-lg px-4 py-3 w-36 md:w-40 flex-row items-center justify-center space-x-2  ${
                  isFemale ? 'bg-pink-400/50' : 'bg-pink-600/80 active:bg-pink-700'
                }`}
                onPress={() => {
                  setisMale(false);
                  setisFemale(true);
                  
                }}
                disabled={isFemale}
              >
                <MaterialIcons name="female" size={20} color={isFemale ? "#d1d5db" : "white"} />
                <Text className={`text-lg font-semibold ${isFemale ? 'text-gray-400' : 'text-white'}`}>
                  {t('female')}
                </Text>
              </TouchableOpacity>
            </View>

          {/* Total Amount Section */}
          <View className="mb-8  rounded-2xl p-5 shadow-lg flex-1 flex-col gap-5" style = {{
            backgroundColor: '#07142B',
          }}>
            <Text className="text-white text-md font-semibold mb-3">
              Enter The Amount
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2 rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
                style={{ 
                borderColor: '#173C4C'
              }}
               
              value={amount.toString()}
              onChangeText={(text) => setAmount(text)} 
              keyboardType="numeric"
            />

            <Text className="text-white text-md font-semibold mb-3">
              Enter The Age
            </Text>
            <TextInput
              className="bg-slate-700/80 border-2  rounded-xl px-5 py-4 
                text-white text-lg shadow-sm mb-2"
                style={{ 
                borderColor: '#173C4C'
              }}
               
              value={years.toString()}
              onChangeText={(text) => setYears(text)}
              keyboardType="numeric"
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
                        {t('enter')}
                      </Text>
                    </View>
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

                <Text className="text-white text-2xl font-semibold text-center">
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