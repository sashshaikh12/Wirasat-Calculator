import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

export default function GetShares() {
  const params = useLocalSearchParams();
  
  // Access values directly from params
  console.log('Total Amount:', params.totalAmount);
  console.log('Biwi:', params.biwi);
  console.log('Baap:', params.baap);
  
  return (
    <SafeAreaView className='flex-1'>
      <LinearGradient 
              colors={['#0F172A', '#1E293B', '#334155']} 
              className="flex-1 justify-center items-center px-6"
            >
        <View>
          <Text>Get Shares Screen</Text>
          <Text>Total Amount: {params.totalAmount}</Text>
          <Text>Biwi: {params.biwi}</Text>
          <Text>Baap: {params.baap}</Text>
        </View>
      </LinearGradient>
      
        
    </SafeAreaView>
    
  );
}