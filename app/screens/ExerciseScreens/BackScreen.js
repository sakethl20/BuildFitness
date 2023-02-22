import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function BackScreen({navigation}) {
    
    const exercises = [
        'Assisted pull-up',
        'Barbell bent-over row',
        'Barbell deadlift',
        'Barbell pull-over',
        'Barbell shrug',
        'Behind the back lat pull-down',
        'Bent-over Smith machine row',
        'Bent-over dumbbell row',
        'Bodyweight row',
        'Cable bent-over row',
        'Cable face pull',
        'Cable seated row',
        'Cable straight-arm pull-down',
        'Chin-up',
        'Close grip lat pull-down',
        'Deadlift machine',
        'Dumbbell deadlift',
        'Dumbbell pull-over',
        'Dumbbell row',
        'Dumbbell shrug',
        'Hammer strength row',
        'Inverted row',
        'Kroc row',
        'Lat pull-down',
        'Meadows row',
        'One-arm dumbbell row',
        'One-arm lat pull-down',
        'Pull-up',
        'Rack pull',
        'Reverse grip bent-over row',
        'Scapular retraction',
        'Seated cable row',
        'Seated reverse fly',
        'Single-arm dumbbell row',
        'Standing reverse fly',
        'Superman',
        'T-bar row',
        'Upright row',
        'Weighted chin-up',
        'Band pull-apart'
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
        color: 'blue',
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
export default BackScreen;