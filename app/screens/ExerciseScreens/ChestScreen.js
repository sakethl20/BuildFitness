import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function ChestScreen() {
    const exercises = [
        'Barbell bench press',
        'Barbell decline bench press',
        'Barbell incline bench press',
        'Barbell pullover',
        'Cable crossover',
        'Cable fly',
        'Decline bench press machine',
        'Decline cable fly',
        'Decline cable press',
        'Decline dumbbell fly',
        'Decline dumbbell press',
        'Dips',
        'Dumbbell bench press',
        'Dumbbell decline bench press',
        'Dumbbell fly',
        'Dumbbell incline bench press',
        'Dumbbell pullover',
        'Explosive push-ups',
        'Incline bench press machine',
        'Incline cable fly',
        'Incline cable press',
        'Incline dumbbell fly',
        'Incline dumbbell press',
        'Machine fly',
        'Medicine ball chest pass',
        'Plyometric push-ups',
        'Push-ups',
        'Single-arm cable crossover',
        'Single-arm cable fly',
        'Single-arm dumbbell bench press',
        'Single-arm dumbbell fly',
        'Swiss ball dumbbell press',
        'Wide grip push-ups',
        'Close grip push-ups',
        'Diamond push-ups',
        ];

        const [searchQuery, setSearchQuery] = useState('');

        const handleSearch = (text) => {
          setSearchQuery(text);
        };
      
        const filteredExercises = exercises.filter((exercise) =>
          exercise.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search for an exercise..."
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
          color: 'gray',
          fontSize: 17,
        },
        searchBar: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          margin: 10,
          width: '90%',
        },
      });

export default ChestScreen;