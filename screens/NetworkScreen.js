import React, {Component} from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';

const sleep = ms => new Promise(res => setTimeout(res, ms));

const ItemComponent = props => (
  <Text style={{fontSize: 40}}>
    {props.item.title} / {props.item.releaseYear}
  </Text>
);

export default class NetworkScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    try {
      await sleep(1000);
      const response = await fetch(
        'https://facebook.github.io/react-native/movies.json',
      );
      const responseJson = await response.json();
      console.log(responseJson);
      this.setState({
        isLoading: false,
        data: responseJson.movies || [],
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <ItemComponent item={item} />}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
