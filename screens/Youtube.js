import * as React from 'react';
import {WebView} from 'react-native-webview';
import {getCoinYoutubeUrl} from '../util';
const Youtube = props => {
  const title = props.navigation.getParam('title', '');
  const uri = getCoinYoutubeUrl(title);

  console.log(title, uri);

  return <WebView source={{uri}} style={{marginTop: 20}} />;
};
export default Youtube;
