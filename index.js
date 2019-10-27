import React from 'react';
import { Dimensions } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

export default ({
  id,
  shortname,
  url = `https://isrmicha2.github.io/react-native-disqus-static/${id}`,
}) => {
  if (!id || !shortname) {
    throw new Error('Shortname or id missing!');
  }
  return (
    <AutoHeightWebView
      source={{
        uri: `https://isrmicha2.github.io/react-native-disqus-static/?shortname=${shortname}&url=${url}&title=${id}`,
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      originWhitelist={['*']}
      mixedContentMode={'always'}
      style={{ width: Dimensions.get('window').width - 15, marginTop: 35 }}
      zoomable={false}
    />
  );
};
