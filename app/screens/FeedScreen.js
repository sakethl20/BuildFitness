import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../Firebase/firebase';

function FeedScreen() {
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Home")
        })
        .catch(error => alert(error.message))
    }

    return (  
      <View style={styles.container}>
        <View style={styles.logOutContainer}>
            <TouchableOpacity 
                style={styles.logOutButton}
                onPress={handleSignOut}>
                <Text style={styles.buttonText2}>Logout</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chest')}>
            <Text style={styles.buttonText}>Chest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Back')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Shoulders')}>
            <Text style={styles.buttonText}>Shoulders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Abs')}>
            <Text style={styles.buttonText}>Abs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Biceps')}>
            <Text style={styles.buttonText}>Biceps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Triceps')}>
            <Text style={styles.buttonText}>Triceps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Forearms')}>
            <Text style={styles.buttonText}>Forearms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Glutes')}>
            <Text style={styles.buttonText}>Glutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hamstrings')}>
            <Text style={styles.buttonText}>Hamstrings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quadriceps')}>
            <Text style={styles.buttonText}>Quadriceps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calves')}>
            <Text style={styles.buttonText}>Calves</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logOutContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 10,
        alignItems: 'flex-start', 
    },
    logOutButton: {
      paddingHorizontal: 5,
      paddingVertical: 5,
      borderRadius: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    button: {
      backgroundColor: 'orange',
      paddingHorizontal: 27,
      paddingVertical: 17,
      borderRadius: 10,
      marginVertical: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderBottomColor: 'rgba(0, 0, 0, 0.5)',
      borderBottomWidth: 1,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonText2: {
        color: 'blue',
        fontSize: 18,
        fontWeight: 'fine',
      },
  });

export default FeedScreen;
