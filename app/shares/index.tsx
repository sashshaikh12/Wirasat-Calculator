import { LinearGradient } from 'expo-linear-gradient';
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
  const [inputValue, setInputValue] = useState('');

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
                placeholder="Enter total amount..."
                placeholderTextColor="#94a3b8" 
                value={inputValue}
                onChangeText={setInputValue}
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
                  'chacha ke beta'
                ].map((person) => (
                  <View key={person} className="bg-slate-800/40 rounded-xl p-4 shadow">
                    <Text className='text-white text-lg font-medium mb-3 capitalize'>
                      {person}
                    </Text>
                    <TextInput
                      className="bg-slate-700/80 border border-purple-500/30 rounded-lg px-4 py-3 
                        text-white"
                      placeholder={`Enter ${person}'s share...`}
                      placeholderTextColor="#94a3b8" 
                      value={inputValue}
                      onChangeText={setInputValue}
                    />
                  </View>
                ))}
              </View>
            </View>
            
            {/* Calculate Button */}
            <TouchableOpacity 
              className="bg-purple-600 rounded-xl px-6 py-4 mt-6 shadow-xl"
              activeOpacity={0.8}
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