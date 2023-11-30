import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StyleSheet, Text} from 'react-native';

const HomeStack = createNativeStackNavigator();

export function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home screen</Text>
    </View>
  );
}

export function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
