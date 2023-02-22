import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {auth} from '../../Firebase/firebase';

function MessagesScreen({navigation}) {

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
            
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5146/5146829.png' }} />
                </View>
                <View style={styles.userInfoContainer}>
                <Text style={styles.userName}>{auth.currentUser?.email}</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Favorite Exercises</Text>
                <TouchableOpacity style={styles.exerciseContainer}>
                    <Image style={styles.exerciseImage} source={{ uri: 'https://via.placeholder.com/100' }} />
                    <Text style={styles.exerciseName}>Bench Press</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.exerciseContainer}>
                    <Image style={styles.exerciseImage} source={{ uri: 'https://via.placeholder.com/100' }} />
                    <Text style={styles.exerciseName}>Squats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.exerciseContainer}>
                    <Image style={styles.exerciseImage} source={{ uri: 'https://via.placeholder.com/100' }} />
                    <Text style={styles.exerciseName}>Deadlifts</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    logOutContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 1, // add padding
        margin: 8, // add margin
        alignItems: 'flex-start',
        backgroundColor: 'lightgray',
        borderWidth: 1, // add border
        borderColor: 'gray', // set border color
        borderRadius: 5, // set border radius
      },
      logOutButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
      },
      buttonText2: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'fine',
      },
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        marginTop: 50, // add margin top
        width: 100,
        height: 100,
        borderRadius: 1,
        overflow: 'hidden',
      },
      
    avatar: {
        width: '70%',
        height: '90%',
    },
    userInfoContainer: {
        marginLeft: 5,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 1,
    },
    userEmail: {
        fontSize: 16,
        color: '#777',
    },
    section: {
        marginTop: 20,
        backgroundColor: '#FFF',
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    exerciseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    exerciseImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MessagesScreen;
