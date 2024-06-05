import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const UserScreen = ({navigation}) => {
  const navigate=useNavigation();
  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
