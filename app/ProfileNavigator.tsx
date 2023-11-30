import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProfileStack = createNativeStackNavigator();

export function ProfileScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileSettings')}>
        <Text>Open profile settings modal</Text>
      </TouchableOpacity>
    </View>
  );
}

export function ProfileDetailsScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileSettings')}>
        <Text>Profile details screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export function ProfileSettingsModal({navigation}) {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeTab')}>
        <Text>Navigate to home tab</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileDetails')}>
        <Text>Navigate to profile details screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen
        name="ProfileDetails"
        component={ProfileDetailsScreen}
      />
      <ProfileStack.Screen
        name="ProfileSettings"
        component={ProfileSettingsModal}
        options={{presentation: 'modal', headerShown: false}}
      />
    </ProfileStack.Navigator>
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
