import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Image, View, Button, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../../Firebase/firebase';
import { useNavigation } from '@react-navigation/native';


function HomeScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Details")
            }
        }) 

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with: ', user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: "https://wallpapers.com/images/hd/chris-bumstead-speed-bag-in-backdrop-ch17w7eqyveckhfr.jpg" }} style={styles.backgroundImage}>
            <KeyboardAvoidingView
                style={styles2.container}
                behavior = "padding"
            >
                <View style={styles2.inputContainer}>
                    <TextInput
                      placeholder="Email"
                        Value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles2.input}
                    />
                    <TextInput
                        placeholder="Password"
                        Value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles2.input}
                        secureTextEntry
                    />
                </View>
                <View>
                    <Text>
                                      
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
        <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.buttonContainer2} 
            onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
}
  
const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
        height: 100
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 5,
    },
})

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
      backgroundColor: "darkorange",
      borderRadius: 2,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 50,
      paddingVertical: 10,
    },
    buttonContainer2: {
        position: 'flex-end',
      //   bottom: 0,
        width: '100%',
        alignSelf: 'flex-end',
        backgroundColor: "orange",
        borderRadius: 2,
        height: 50,
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
        fontSize: 20,
    },
      
  });
  
  export default HomeScreen;
   