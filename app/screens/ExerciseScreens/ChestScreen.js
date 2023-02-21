import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

function ChestScreen() {
  const exercises = [
    'Barbell bench press',
    'Barbell incline bench press',
    'Barbell decline bench press',
    'Dumbbell bench press',
    'Dumbbell incline bench press',
    'Dumbbell decline bench press',
    'Chest press machine',
    'Cable fly',
    'Dumbbell fly',
    'Incline dumbbell fly',
    'Decline dumbbell fly',
    'Machine fly',
    'Dips',
    'Incline dumbbell press',
    'Decline dumbbell press',
    'Incline bench press machine',
    'Decline bench press machine',
    'Push-ups',
    'Wide grip push-ups',
    'Close grip push-ups',
    'Explosive push-ups',
    'Diamond push-ups',
    'Single-arm dumbbell bench press',
    'Single-arm dumbbell fly',
    'Barbell pullover',
    'Dumbbell pullover',
    'Cable crossover',
    'Incline cable fly',
    'Decline cable fly',
    'Incline cable press',
    'Decline cable press',
    'Single-arm cable crossover',
    'Single-arm cable fly',
    'Medicine ball chest pass',
    'Plyometric push-ups',
    'Swiss ball dumbbell press',
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

export default ChestScreen;



{/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
<Button title="Go back" onPress={() => navigation.goBack()} /> */}