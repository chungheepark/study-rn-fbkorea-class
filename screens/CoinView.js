import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import CoinItem from '../components/CoinItem';
import fetchDummy from '../fetchDummy';
import {getCoinIconUri} from '../util';

const getCoinData = async limit => {
  const datas = await fetchDummy(limit);
  return datas.filter(data => {
    if (!data) {
      return false;
    }

    if (data.name) {
      return true;
    } else {
      return false;
    }
  });
};

class CoinView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      coinData: [],
    };
  }

  getCoin = async () => {
    this.setState({isLoading: true});
    const data = await getCoinData(10);
    if (this.props.setRefreshDate !== null) {
      this.props.setRefreshDate(new Date().toLocaleString());
    }
    this.setState({isLoading: false, coinData: data});
  };

  componentDidMount() {
    this.getCoin();
  }

  renderItem = ({item}) => {
    const {rank, name, price_usd, market_cap_usd, last_update} = item;
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push('Youtube', {title: name})}>
        <CoinItem
          rank={rank}
          name={name || 'Null'}
          price={price_usd}
          volume={market_cap_usd}
          iconUri={getCoinIconUri(name || 'Null')}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.coinData}
        keyExtractor={item => item.name}
        renderItem={this.renderItem}
        refreshing={this.state.isLoading}
        onRefresh={this.getCoin}
      />
    );
  }
}

export default CoinView;
