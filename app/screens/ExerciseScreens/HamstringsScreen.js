import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function HamstringsScreen({navigation}) {

    const [searchTerm, setSearchTerm] = useState('');

    const exercises = [
        'Barbell stiff-legged deadlift',
        'Barbell Romanian deadlift',
        'Barbell good morning',
        'Cable leg curl',
        'Cable pull-through',
        'Deadlift machine',
        'Dumbbell stiff-legged deadlift',
        'Dumbbell Romanian deadlift',
        'Dumbbell good morning',
        'Glute-ham raise',
        'Kettlebell swing',
        'Lying leg curl',
        'Nordic hamstring curl',
        'One-legged Romanian deadlift',
        'Seated leg curl',
        'Single-leg deadlift',
        'Slider leg curl',
        'Smith machine Romanian deadlift',
        'Stability ball hamstring curl',
        'Sumo deadlift',
        'Swiss ball leg curl',
        'Trap bar deadlift',
        'Wide stance squat',
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

export default HamstringsScreen;
