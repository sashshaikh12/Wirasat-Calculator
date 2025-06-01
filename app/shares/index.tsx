import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';


export default function shares() {
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient 
        colors={['#0F172A', '#1E293B', '#334155']} 
        className="flex-1 justify-center items-center px-6"
      >
        <View className="bg-white/10 rounded-3xl p-8 w-full max-w-md 
                       shadow-xl border border-white/20">
            <Text className="text-white text-4xl font-bold text-center mb-2">
              Shares page
            </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}