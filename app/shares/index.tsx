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

export default function Shares() {
  const [totalAmount, setTotalAmount] = useState(0);
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
  }, []);

                


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
          <Text className="text-slate-300 text-center mb-6">
            Calculate according to Sharia law
          </Text>

          {/* Gender Section */}
          <View className="mb-8 px-4 mt-10">
            <Text className="text-white text-2xl font-bold mb-8 text-center">
              Gender Of The Deceased
            </Text>
            
            <View className="flex-row justify-between space-x-4 md:space-x-6">
              {/* Male Button */}
              <TouchableOpacity 
                className={`rounded-lg px-4 py-3 w-36 md:w-40 flex-row items-center justify-center space-x-2 shadow-md ${
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
                  Male
                </Text>
              </TouchableOpacity>
              
              {/* Female Button */}
              <TouchableOpacity 
                className={`rounded-lg px-4 py-3 w-36 md:w-40 flex-row items-center justify-center space-x-2 shadow-md ${
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
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          

          {/* Family Members Section */}
          <View className="mb-8 mt-10">
            <Text className="text-white text-2xl font-bold mb-6 text-center">
              Family Members
            </Text>
            <View className="space-y-5">
              {(isMale ? maleList : femaleList).map((person) => (
                <View key={person} className="bg-slate-800/40 rounded-xl p-4 shadow">
                  <Text className="text-white text-lg font-medium mb-3">
                    {person}
                  </Text>
                  <TextInput
                    className="bg-slate-700/80 border border-purple-500/30 rounded-lg px-4 py-3 
                      text-white"
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
            className="bg-purple-600 rounded-xl px-6 py-4 mt-6 shadow-xl mb-16"
            activeOpacity={0.8}
            onPress={() => {
              const familyData = {};
              Object.keys(personStateMap).forEach(person => {
                familyData[person] = Number(personStateMap[person].value);
              });

              router.push({
                pathname: 'shares/getShares',
                params: {
                  totalAmount,
                  ...familyData
                },
              });
            }}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Calculate Shares
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}