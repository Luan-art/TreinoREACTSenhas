import { ThemedText } from '@/components/ThemedText';
import { View, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-awesome-slider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

export default function App() {
  const progress = useSharedValue(30);
  const min = useSharedValue(6);
  const max = useSharedValue(20);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={style.container}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={style.logo}
        />
        
        <ThemedText type="title" style={{ color: 'black' }}>20 caracteres</ThemedText>
        
        <View style={style.area}>
          <Slider
            style={{ height: 50 }}
            progress={progress}
            minimumValue={min}
            maximumValue={max}
          />
        </View>

        <TouchableOpacity style={style.button}>
          <ThemedText style={style.buttonText}>Gerar senha</ThemedText>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: "#392de9",
    width: '80%',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20 
  }
});
