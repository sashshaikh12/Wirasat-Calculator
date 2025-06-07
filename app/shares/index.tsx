import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function Shares() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [baap, setBaap] = useState(0);
  const [dada, setDada] = useState(0);
  const [shohar, setShohar] = useState(0);
  const [akhyafibhai, setAkhyafibhai] = useState(0);
  const [akhyafibehen, setAkhyafibehen] = useState(0);
  const [allatibehen, setAllatibehen] = useState(0);
  const [poti, setPoti] = useState(0);
  const [dadi, setDadi] = useState(0);
  const [nani, setNani] = useState(0);
  const [haqeeqibehen, setHaqeeqibehen] = useState(0);
  const [maa, setMaa] = useState(0);
  const [Beti, setBeti] = useState(0);
  const [biwi, setBiwi] = useState(0);
  const [beta, setBeta] = useState(0);
  const [pota, setPota] = useState(0);
  const [padpota, setPadpota] = useState(0);
  const [haqeeqibhai, setHaqeeqibhai] = useState(0);
  const [allatibhai, setAllatibhai] = useState(0);
  const [haqeeqibhateeja, setHaqeeqibhateeja] = useState(0);
  const [allatibhateeja, setAllatibhateeja] = useState(0);  
  const [chacha, setChacha] = useState(0);
  const [chachaKeBeta, setChachaKeBeta] = useState(0);

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
            <Text className="text-white text-2xl font-bold mb-6 text-center">
              Gender Of The Deceased
            </Text>
            
            <View className="flex-row justify-center space-x-4 md:space-x-6">
              {/* Male Button */}
              <TouchableOpacity 
                className="bg-blue-600/80 rounded-lg px-4 py-3 w-36 md:w-40 flex-row items-center justify-center space-x-2 shadow-md active:bg-blue-700"
              >
                <MaterialIcons name="male" size={20} color="white" />
                <Text className="text-white text-lg font-semibold">
                  Male
                </Text>
              </TouchableOpacity>
              
              {/* Female Button */}
              <TouchableOpacity 
                className="bg-pink-600/80 rounded-lg px-4 py-3 w-36 md:w-40 flex-row items-center justify-center space-x-2 shadow-md active:bg-pink-700"
              >
                <MaterialIcons name="female" size={20} color="white" />
                <Text className="text-white text-lg font-semibold">
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
              {[
                'baap',
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
                'biwi',
                'beta',
                'pota',
                'padpota',
                'haqeeqibhai',
                'allatibhai',
                'haqeeqibhateeja',
                'allatibhateeja',
                'chacha',
              ].map((person) => (
                <View key={person} className="bg-slate-800/40 rounded-xl p-4 shadow">
                  <Text className="text-white text-lg font-medium mb-3 capitalize">
                    {person}
                  </Text>
                  <TextInput
                    className="bg-slate-700/80 border border-purple-500/30 rounded-lg px-4 py-3 
                      text-white"
                    placeholder="0"
                    placeholderTextColor="#94a3b8" 
                    value={personStateMap[person].value}
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

              router.replace({
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