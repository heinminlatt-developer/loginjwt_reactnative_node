import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = ({navigation}) => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="GO TO HOME" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({});
