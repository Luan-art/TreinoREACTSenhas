import { ThemedText } from '@/components/ThemedText';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Slider } from 'react-native-awesome-slider';
import { useSharedValue } from 'react-native-reanimated';

export default function App(){
  const progress = useSharedValue(30);
  const min = useSharedValue(6);
  const max = useSharedValue(20);

  return(
    <View style = { style.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={style.logo}
      />

      <ThemedText type="title">20 caracteres</ThemedText>
      
      <View style={style.area}>
       
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom:14,
    width: '80%',
    backgroundColor:"#FFF",
    borderRadius: 8,
    padding: 8
  }
  
})
 