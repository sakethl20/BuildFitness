import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function CalvesScreen({navigation}) {
    
    const exercises = [
        'Barbell calf raise',
        'Barbell one-leg calf raise',
        'Calf machine shoulder shrug',
        'Calf raise',
        'Calf raise on a leg press machine',
        'Calf raise with a stability ball',
        'Calf raise with resistance bands',
        'Donkey calf raise',
        'Donkey calf raise on a leg press machine',
        "Farmer's walk",
        "Farmer's walk with calf raise",
        'Dumbbell calf raise',
        'Dumbbell one-leg calf raise',
        'Leg press calf raise',
        'Leg press one-leg calf raise',
        'Leg press toe press',
        'Seated calf raise',
        'Seated calf raise on a leg press machine',
        'Seated one-leg calf raise',
        'Smith machine behind the back calf raise',
        'Smith machine calf raise',
        'Smith machine one-leg calf raise',
        'Standing calf raise',
        'Standing calf raise on a leg press machine',
        'Standing one-leg calf raise',
      ];
      
    const [searchQuery, setSearchQuery] = useState('');
      
    const filteredExercises = exercises.filter(exercise =>
      exercise.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const handleSearch = (text) => {
      setSearchQuery(text);
    }
      
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search exercises"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <ScrollView style={styles.scrollView}>
            {filteredExercises.map((exercise, index) => (
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
    searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      margin: 10,
      width: '90%',
    },
  });

export default CalvesScreen;
