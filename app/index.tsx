import { LinearGradient } from 'expo-linear-gradient';
import { Text } from "react-native";

export default function Index() {
  return (
    <LinearGradient
  colors={['#0D0B1F', '#6D28D9']}
  className="flex-1"
>
  <Text className="text-white text-2xl font-semibold">Wirasat App</Text>
</LinearGradient>


  );
}
