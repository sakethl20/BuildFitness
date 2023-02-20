import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styler.container}>
        <Text>My unmatched perspicacity, coupled with my sheer indefatigability, makes me a master in all human endeavors</Text>
      </View>
      <TouchableOpacity>
        <Image 
          fadeDuration={1000}
          source={require('./app/assets/tateArrest.jpeg')} 
          style={{ width: 350, height: 200 }}
        />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button
          title="Join the New World"
          onPress={()=> alert('Welcome to the New World')}
          color="white"
          style={styles.button}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: "orange",
    borderRadius: 4,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    color: 'white'
  },
});

const styler = StyleSheet.create({
  container: {
    flex: 0,
    //backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
