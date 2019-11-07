import React from 'react';
import {StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';

import CoinItem from '../components/CoinItem';
import fetchDummy from '../fetchDummy';
import {getCoinIconUri} from '../util';

const getCoinData = async limit => {
  try {
    // const response = await fetch(
    //   `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`,
    // );
    // const responseJson = await response.json();
    const data = await fetchDummy(10);
    return data.slice(0, limit);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

class CoinView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      coinData: [],
    };
  }

  async getCoin() {
    this.setState({isLoading: true});
    const data = await getCoinData(10);
    if (this.props.setRefreshDate !== null) {
      this.props.setRefreshDate(new Date().toLocaleString());
    }
    this.setState({isLoading: false, coinData: data});
  }

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
      <ScrollView style={[styles.container, this.props.style]}>
        <FlatList
          data={this.state.coinData}
          keyExtractor={item => item.name}
          renderItem={this.renderItem}
          refreshing={this.state.isLoading}
          onRefresh={this.getCoin}
        />
      </ScrollView>
    );
  }
}

// function CoinView(props) {
//   const {setRefreshDate} = props;
//   const [isLoading, setIsLoading] = useState(true);
//   const [coinData, setCoinData] = useState([]);

//   const getCoin = useCallback(async () => {
//     console.log('-----------getCoin Callback');
//     setIsLoading(true);
//     const data = await getCoinData(10);
//     setCoinData(data);
//     if (setRefreshDate !== null) {
//       setRefreshDate(new Date().toLocaleString());
//     }
//     setIsLoading(false);
//   }, [setRefreshDate]);

//   useEffect(() => {
//     getCoin();
//   }, [getCoin, setRefreshDate]);

//   console.log('isLoading:', isLoading);

//   return (
//     <ScrollView style={[styles.container, props.style]}>
//       <FlatList
//         data={coinData}
//         keyExtractor={item => item.name}
//         renderItem={renderCoinItem}
//         refreshing={isLoading}
//         onRefresh={() => {
//           console.log('onRefresh called!!!!!!!!!!!!!');
//           getCoin();
//         }}
//       />
//     </ScrollView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'skyblue',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default CoinView;
