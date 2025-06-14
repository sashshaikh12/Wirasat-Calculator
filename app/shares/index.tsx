import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';


export default function Shares() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [tajheez, setTajheez] = useState(0);
  const [qarza, setQarza] = useState(0);
  const [wasiyat, setWasiyat] = useState(0);
  const [baap, setBaap] = useState("");
  const [dada, setDada] = useState("");
  const [shohar, setShohar] = useState("");
  const [akhyafibhai, setAkhyafibhai] = useState("");
  const [akhyafibehen, setAkhyafibehen] = useState("");
  const [allatibehen, setAllatibehen] = useState("");
  const [poti, setPoti] = useState("");
  const [dadi, setDadi] = useState("");
  const [nani, setNani] = useState("");
  const [haqeeqibehen, setHaqeeqibehen] = useState("");
  const [maa, setMaa] = useState("");
  const [Beti, setBeti] = useState("");
  const [biwi, setBiwi] = useState("");
  const [beta, setBeta] = useState("");
  const [pota, setPota] = useState("");
  const [padpota, setPadpota] = useState("");
  const [haqeeqibhai, setHaqeeqibhai] = useState("");
  const [allatibhai, setAllatibhai] = useState("");
  const [haqeeqibhateeja, setHaqeeqibhateeja] = useState("");
  const [allatibhateeja, setAllatibhateeja] = useState("");  
  const [chacha, setChacha] = useState("");
  const [isMale, setisMale] = useState(true);
  const [isFemale, setisFemale] = useState(false);

  const { t } = useTranslation();

  // Create a mapping of person to their state setter
  const personStateMap = {
    'baap': { value: baap, setter: setBaap },
    'dada': { value: dada, setter: setDada },
    'shohar': { value: shohar, setter: setShohar },
    'akhyafibhai': { value: akhyafibhai, setter: setAkhyafibhai },
    'akhyafibehen': { value: akhyafibehen, setter: setAkhyafibehen },
    'allatibehen': { value: allatibehen, setter: setAllatibehen },
    'poti': { value: poti, setter: setPoti },
    'dadi': { value: dadi, setter: setDadi },
    'nani': { value: nani, setter: setNani },
    'haqeeqibehen': { value: haqeeqibehen, setter: setHaqeeqibehen },
    'maa': { value: maa, setter: setMaa },
    'beti': { value: Beti, setter: setBeti },
    'biwi': { value: biwi, setter: setBiwi },
    'beta': { value: beta, setter: setBeta },
    'pota': { value: pota, setter: setPota },
    'padpota': { value: padpota, setter: setPadpota },
    'haqeeqibhai': { value: haqeeqibhai, setter: setHaqeeqibhai },
    'allatibhai': { value: allatibhai, setter: setAllatibhai },
    'haqeeqibhateeja': { value: haqeeqibhateeja, setter: setHaqeeqibhateeja },
    'allatibhateeja': { value: allatibhateeja, setter: setAllatibhateeja },
    'chacha': { value: chacha, setter: setChacha }
  };

  const maleList = ['baap',
                'dada',
                'akhyafibhai',
                'akhyafibehen',
                'allatibehen',
                'poti',
                'dadi',
                'nani',
                'haqeeqibehen',
                'maa',
                'beti',
                'biwi',
                'beta',
                'pota',
                'padpota',
                'haqeeqibhai',
                'allatibhai',
                'haqeeqibhateeja',
                'allatibhateeja',
                'chacha',]
  
  const femaleList = ['baap',
                'dada',
                'shohar',
                'akhyafibhai',
                'akhyafibehen',
                'allatibehen',
                'poti',
                'dadi',
                'nani',
                'haqeeqibehen',
                'maa',
                'beti',
                'beta',
                'pota',
                'padpota',
                'haqeeqibhai',
                'allatibhai',
                'haqeeqibhateeja',
                'allatibhateeja',
                'chacha',]

  const params = useLocalSearchParams();

  useEffect(() => {
      setTotalAmount(Number(params.remainingAmount));
      setTajheez(Number(params.tajheez));
      setQarza(Number(params.qarza));
      setWasiyat(Number(params.wasiyat));
  }, []);

                


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
          <Text className="text-slate-300 text-center mb-6">
            {t('caption')}
          </Text>

          {/* Gender Section */}
          <View className="mb-8 px-4 mt-10">
            <Text className="text-white text-2xl font-bold mb-8 text-center">
              {t('gender')}
            </Text>
            
            <View className="flex-row justify-between space-x-4 md:space-x-6">
              {/* Male Button */}
              <TouchableOpacity 
                className={`rounded-lg px-4 py-3 w-36 md:w-40 flex-row items-center justify-center space-x-2  ${
                  isMale ? 'bg-blue-400/50' : 'bg-blue-600/80 active:bg-blue-700'
                }`}
                onPress={() => {
                  setisMale(true);
                  setisFemale(false);
                  for (const person in personStateMap) {
                    personStateMap[person].setter(""); // Reset all fields when switching
                  }
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
                  for (const person in personStateMap) {
                    personStateMap[person].setter(""); // Reset all fields when switching
                  }
                }}
                disabled={isFemale}
              >
                <MaterialIcons name="female" size={20} color={isFemale ? "#d1d5db" : "white"} />
                <Text className={`text-lg font-semibold ${isFemale ? 'text-gray-400' : 'text-white'}`}>
                  {t('female')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          

          {/* Family Members Section */}
          <View className="mb-8 mt-10">
            <Text className="text-white text-2xl font-bold mb-6 text-center">
              {t('familyMembers')}
            </Text>
            <View className="space-y-5">
              {(isMale ? maleList : femaleList).map((person) => (
                <View key={person} className="rounded-xl p-4 shadow mb-6" style={{
                        backgroundColor: '#07142B', // Set the background color here
                      }}>
                  <Text className="text-white text-lg font-medium mb-3">
                    {t(person)}
                  </Text>
                  <TextInput
                    className="bg-slate-700/80 border rounded-lg px-4 py-3 
                      text-white"
                      style={{
                        borderColor: '#173C4C', // Set the background color here
                      }}
                    placeholder="0"
                    placeholderTextColor="#94a3b8" 
                    value={personStateMap[person].value.toString()}
                    onChangeText={personStateMap[person].setter}
                    keyboardType="numeric"
                  />
                </View>
              ))}
            </View>
          </View>

          {/* Calculate Button */}
          <TouchableOpacity 
            className="mb-8 rounded-2xl overflow-hidden shadow-md"
            activeOpacity={0.8}
            onPress={() => {
              let entered = false;
              let wrong = false;
              const familyData = {};
              Object.keys(personStateMap).forEach(person => {
                if(personStateMap[person].value.includes('.') || personStateMap[person].value.includes('-') || personStateMap[person].value.includes(',') || personStateMap[person].value.includes(' ')) {
                  wrong = true;
                }
                familyData[person] = Number(personStateMap[person].value);
                if (familyData[person] > 0) {
                  entered = true;
                }
              });

              if(wrong)
              {
                Toast.show({
                        type: 'error',
                        text1: 'Please enter valid numbers',
                        position: 'top',
                        visibilityTime: 2000,
                        autoHide: true,
                        topOffset: 40,             
                      });
                return;
              }

              if(!entered)
              {
                Toast.show({
                        type: 'error',
                        text1: 'Please fill the fields',
                        position: 'top',
                        visibilityTime: 2000,
                        autoHide: true,
                        topOffset: 40,             
                      });
                return;
              }
              if(familyData['baap'] > 1)
              {
                Toast.show({
                        type: 'error',
                        text1: 'Baap can only be 0 or 1',
                        position: 'top',
                        visibilityTime: 2000,
                        autoHide: true,
                        topOffset: 40,
                      });
                return;
              }

              if(familyData['maa'] > 1)
              {
                Toast.show({
                        type: 'error',
                        text1: 'Maa can only be 0 or 1',
                        position: 'top',
                        visibilityTime: 2000,
                        autoHide: true,
                        topOffset: 40,
                      });
                return;
              }
              if(familyData['biwi'] > 4)
              {
                Toast.show({
                        type: 'error',
                        text1: 'Biwi can only be 0 to 4',
                        position: 'top',
                        visibilityTime: 2000,
                        autoHide: true,
                        topOffset: 40,
                      });
                return;
              }
              if(familyData['shohar'] > 1)
              {
                Toast.show({
                        type: 'error',
                        text1: 'Shohar can only be 0 or 1',
                        position: 'top',
                        visibilityTime: 2000,
                        autoHide: true,
                        topOffset: 40,
                      });
                return;
              }
              
              router.push({
                pathname: 'shares/getShares',
                params: {
                  totalAmount,
                  ...familyData,
                  tajheez,
                  qarza,
                  wasiyat
                },
              });
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
                {t('calculateShares')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}