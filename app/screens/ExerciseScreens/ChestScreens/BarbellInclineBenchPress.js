import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

function BarbellInclineBenchPress(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={{uri: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/incline-barbell-bench-press.gif"}} />
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Muscles Worked:</Text>
                <Text style={styles.text}>- Upper Pectoralis Major (Upper Chest)</Text>
                <Text style={styles.text}>- Anterior Deltoids (Shoulders)</Text>
                <Text style={styles.text}>- Triceps Brachii</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Equipment:</Text>
                <Text style={styles.text}>- Barbell</Text>
                <Text style={styles.text}>- Incline Bench</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Instructions:</Text>
                <Text style={styles.text}>
                1. Lie on an incline bench with your feet flat on the ground and your back arched.
                </Text>
                <Text style={styles.text}>
                2. Grasp the barbell with your hands slightly wider than shoulder-width apart.
                </Text>
                <Text style={styles.text}>
                3. Lower the barbell to your upper chest while keeping your elbows at a 45-degree angle.
                </Text>
                <Text style={styles.text}>4. Press the barbell back up to the starting position, exhaling as you do so.</Text>
                <Text style={styles.text}>5. Repeat for the desired number of repetitions.</Text>
            </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    image: {
        width: '100%',
        height: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    sectionContainer: {
        alignSelf: 'stretch',
        marginLeft: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 5,
    },
});

export default BarbellInclineBenchPress;
