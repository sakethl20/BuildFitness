import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

function CableCrossover(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={{uri: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/cable-cross-over.gif"}} />
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Muscles Worked:</Text>
                <Text style={styles.text}>- Pectoralis Major (Chest)</Text>
                <Text style={styles.text}>- Anterior Deltoids (Shoulders)</Text>
                <Text style={styles.text}>- Biceps Brachii</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Equipment:</Text>
                <Text style={styles.text}>- Cable machine</Text>
                <Text style={styles.text}>- Crossover attachment</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Instructions:</Text>
                <Text style={styles.text}>
                    1. Adjust the cables to the desired height and weight.
                </Text>
                <Text style={styles.text}>
                    2. Stand in the middle of the cable machine with one foot in front of the other for stability.
                </Text>
                <Text style={styles.text}>
                    3. Grasp the handles and stand with your arms straight out to the sides, parallel to the ground.
                </Text>
                <Text style={styles.text}>
                    4. Bring the handles in front of your chest by crossing them over each other.
                </Text>
                <Text style={styles.text}>
                    5. Slowly release the handles back to the starting position and repeat for the desired number of repetitions.
                </Text>
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

export default CableCrossover;
