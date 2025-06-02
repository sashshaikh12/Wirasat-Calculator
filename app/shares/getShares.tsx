import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function GetShares() {
  const params = useLocalSearchParams();
  
  // Access values directly from params
  console.log('Total Amount:', params.totalAmount);
  console.log('Biwi:', params.biwi);
  console.log('Baap:', params.baap);
  
  return (
    <View>
      <Text>Get Shares Screen</Text>
      <Text>Total Amount: {params.totalAmount}</Text>
      <Text>Biwi: {params.biwi}</Text>
    </View>
  );
}