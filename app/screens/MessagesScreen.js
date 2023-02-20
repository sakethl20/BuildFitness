import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';

function MessagesScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Messages Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

export default MessagesScreen;