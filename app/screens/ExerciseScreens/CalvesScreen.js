import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView } from 'react-native';

function CalvesScreen({navigation}) {
    
    const exercises = [
        'Calf raise',
        'Donkey calf raise',
        'Seated calf raise',
        'Standing calf raise',
        "Farmer's walk",
        'Dumbbell calf raise',
        'Smith machine calf raise',
        'Barbell calf raise',
        'Leg press calf raise',
        'Leg press toe press',
        'Standing one-leg calf raise',
        'Seated one-leg calf raise',
        'Leg press one-leg calf raise',
        'Smith machine one-leg calf raise',
        'Dumbbell one-leg calf raise',
        'Donkey calf raise on a leg press machine',
        'Calf raise on a leg press machine',
        'Seated calf raise on a leg press machine',
        'Standing calf raise on a leg press machine',
        "Farmer's walk with calf raise",
        'Barbell one-leg calf raise',
        'Seated one-leg calf raise on a leg press machine',
        'Standing one-leg calf raise on a leg press machine',
        'Calf raise with resistance bands',
        'Calf raise with a stability ball',
      ];
      
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            {exercises.map((exercise, index) => (
              <View style={styles.buttonContainer} key={index}>
                <Text style={styles.buttonText}>{exercise}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    scrollView: {
      width: '100%',
      paddingHorizontal: 20,
    },
    buttonContainer: {
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    buttonText: {
      color: 'blue',
      fontSize: 17,
    },
  });

export default CalvesScreen;