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
const [totalAmount, setTotalAmount] = useState('0');


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
              keyboardType="numeric"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
);
}