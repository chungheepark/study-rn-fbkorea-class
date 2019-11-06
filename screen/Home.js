import React from 'react';
import {Button, View, Text} from 'react-native';

function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
        title="Modal!"
        onPress={() => props.navigation.navigate('MyModal')}
      />
    </View>
  );
}

HomeScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
};

export default HomeScreen;
