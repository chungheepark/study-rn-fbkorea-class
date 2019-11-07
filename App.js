import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Youtube from './screens/Youtube';

const Header = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 18}}>{props.title}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>{props.subtitle}</Text>
    </View>
  );
};

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: (
            <Header
              title="Show me The coin"
              subtitle={navigation.getParam('refreshDate', '-')}
            />
          ),
          headerStyle: {
            backgroundColor: 'pink',
          },
        };
      },
    },
    Youtube: {
      screen: Youtube,
      navigationOptions: ({navigation}) => {
        return {
          title: navigation.getParam('title', 'YOUTUBE'),
        };
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(MainStack);
const App = () => {
  return <AppContainer />;
};

export default App;
