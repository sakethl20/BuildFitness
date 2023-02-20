import React from 'react';
import { StyleSheet, Text, Image, View, Button, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: "https://wallpapers.com/images/hd/chris-bumstead-speed-bag-in-backdrop-ch17w7eqyveckhfr.jpg" }} style={styles.backgroundImage}>
          <View style={styles.content}>
            <Text style={styles.text}>"The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to conquer." - Arnold Schwarzenegger</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Join Fitness"
                onPress={() => navigation.navigate('Details')}
                color="white"
                style={styles.button}
              />
            </View>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    text: {
      color: 'white',
      fontSize: 24,
      textAlign: 'center',
      margin: 20,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 60,
      width: '50%',
      alignSelf: 'center',
      backgroundColor: "orange",
      borderRadius: 4,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      color: 'white'
    },
  });
  
  export default HomeScreen;
   