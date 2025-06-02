import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
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
    'Beti': { value: Beti, setter: setBeti },
    'biwi': { value: biwi, setter: setBiwi },
    'beta': { value: beta, setter: setBeta },
    'pota': { value: pota, setter: setPota },
    'padpota': { value: padpota, setter: setPadpota },
    'haqeeqibhai': { value: haqeeqibhai, setter: setHaqeeqibhai },
    'allatibhai': { value: allatibhai, setter: setAllatibhai },
    'haqeeqibhateeja': { value: haqeeqibhateeja, setter: setHaqeeqibhateeja },
    'allatibhateeja': { value: allatibhateeja, setter: setAllatibhateeja },
    'chacha': { value: chacha, setter: setChacha },
    'chacha ka beta': { value: chachaKeBeta, setter: setChachaKeBeta }
  };


  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <ScrollView className='flex-1' contentContainerStyle={{ paddingBottom: 40 }}>
        <LinearGradient 
          colors={['#0F172A', '#1E293B', '#334155']} 
          className="flex-1 p-6"
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View className="mt-4 mb-8">
            <Text className="text-white text-3xl font-bold mb-2 text-center">
              Islamic Inheritance Shares
            </Text>
            <Text className="text-slate-300 text-center mb-6">
              Calculate according to Sharia law
            </Text>
            
            {/* Total Amount Section */}
            <View className="mb-8 bg-slate-800/50 rounded-2xl p-5 shadow-lg">
              <Text className="text-white text-lg font-semibold mb-3">
                Total Estate Amount
              </Text>
              <TextInput
                className="bg-slate-700/80 border-2 border-purple-500/40 rounded-xl px-5 py-4 
                  text-white text-lg shadow-sm"
                placeholder="0"
                placeholderTextColor="#94a3b8" 
                value={totalAmount}
                onChangeText={setTotalAmount}
                keyboardType='numeric'
              />
            </View>

            {/* Family Members Section */}
            <View className="mb-8">
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
                  'Beti',
                  'biwi',
                  'beta',
                  'pota',
                  'padpota',
                  'haqeeqibhai',
                  'allatibhai',
                  'haqeeqibhateeja',
                  'allatibhateeja',
                  'chacha',
                  'chacha ka beta'
                ].map((person) => (
                  <View key={person} className="bg-slate-800/40 rounded-xl p-4 shadow">
                    <Text className='text-white text-lg font-medium mb-3 capitalize'>
                      {person}
                    </Text>
                    <TextInput
                      className="bg-slate-700/80 border border-purple-500/30 rounded-lg px-4 py-3 
                        text-white"
                      placeholder={`0`}
                      placeholderTextColor="#94a3b8" 
                      value={personStateMap[person].value}
                      onChangeText={personStateMap[person].setter}
                      keyboardType='numeric'
                    />
                  </View>
                ))}
              </View>
            </View>
            
            {/* Calculate Button */}
            <TouchableOpacity 
              className="bg-purple-600 rounded-xl px-6 py-4 mt-6 shadow-xl"
              activeOpacity={0.8}
              onPress={() => {

                const familyData = {};
                Object.keys(personStateMap).forEach(person => {
                  familyData[person] = personStateMap[person].value;
                });
                
                router.push({
                  pathname: 'shares/getShares',
                  params: {
                    totalAmount,
                    ...familyData  // Spread the values as individual parameters
                  }
                });

              }}
            >
              <Text className="text-white text-center font-semibold text-lg">
                Calculate Shares
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}