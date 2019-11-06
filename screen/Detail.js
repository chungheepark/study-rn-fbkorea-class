import React from 'react';
import {Button, View, Text} from 'react-native';

function DetailsScreen(props) {
  const {navigation} = props;
  const {getParam, setParams, push, navigate, goBack} = navigation;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(getParam('itemId', 'NO-ID'))}</Text>
      <Text>
        otherParam:
        {JSON.stringify(getParam('otherParam', 'default value'))}
      </Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Update the title"
        onPress={() => setParams({otherParam: 'Updated!'})}
      />
      <Button title="Go to Home" onPress={() => navigate('Home')} />
      <Button title="Go back" onPress={() => goBack()} />
    </View>
  );
}

DetailsScreen.navigationOptions = ({navigation, navigationOptions}) => {
  return {
    title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  };
};

export default DetailsScreen;
