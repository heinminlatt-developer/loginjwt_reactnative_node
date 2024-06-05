import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="GO TO USER" onPress={navigation.navigate("User")}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
