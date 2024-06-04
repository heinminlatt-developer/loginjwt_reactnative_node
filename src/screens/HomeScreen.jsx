import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
    console.log(navigation);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button on>GO Profile</Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
