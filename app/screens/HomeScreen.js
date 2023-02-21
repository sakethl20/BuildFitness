import React from 'react';
import { StyleSheet, Text, Image, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: "https://wallpapers.com/images/hd/chris-bumstead-speed-bag-in-backdrop-ch17w7eqyveckhfr.jpg" }} style={styles.backgroundImage}>
          <View style={styles.content}>
            <Text style={styles.text}>"The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to conquer." - Arnold Schwarzenegger</Text>
          </View>
        </ImageBackground>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Details')}>
            <Text style={styles.buttonText}>Start Your Journey</Text>
        </TouchableOpacity>
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
      fontSize: 23,
      textAlign: 'center',
      margin: 30,
    },
    buttonContainer: {
      position: 'flex-end',
    //   bottom: 0,
      width: '100%',
      alignSelf: 'flex-end',
      backgroundColor: "orange",
      borderRadius: 2,
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 50
    },
    button: {
      color: 'white',
      fontSize: 40
    },
    buttonTitle: {
        fontSize: 40,
        color: 'white',
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
      
  });
  
  export default HomeScreen;
   