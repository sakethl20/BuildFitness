import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ShouldersScreen({navigation}) {
    
    const exercises = [
        'Alternating deltoid raise',
        'Arnold press',
        'Barbell front raise',
        'Barbell rear delt row',
        'Barbell shoulder press',
        'Behind-the-neck barbell press',
        'Bent-over dumbbell lateral raise',
        'Cable front raise',
        'Cable rear delt fly',
        'Cable single-arm lateral raise',
        'Cable upright row',
        'Clean and press',
        'Cuban press',
        'Dumbbell front raise',
        'Dumbbell lateral raise',
        'Dumbbell rear delt fly',
        'Dumbbell shoulder press',
        'Dumbbell upright row',
        'Face pull',
        'Handstand push-up',
        'Incline dumbbell lateral raise',
        'Kettlebell press',
        'Kettlebell swing to high pull',
        'Lateral raise machine',
        'Military press machine',
        'Overhead dumbbell press',
        'Overhead press machine',
        'Push press',
        'Rear delt fly machine',
        'Reverse fly',
        'Seated barbell shoulder press',
        'Seated dumbbell press',
        'Seated machine shoulder press',
        'Seated military press',
        'Seated rear delt fly',
        'Single-arm kettlebell press',
        'Snatch',
        'Standing dumbbell press',
        'Standing military press',
        'Standing single-arm dumbbell press',
        'Swiss ball dumbbell lateral raise',
        'Trap bar farmer\'s walk'
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
      color: 'darkblue',
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

  export default ShouldersScreen;