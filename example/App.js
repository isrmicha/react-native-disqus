import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ReactNativeDisqus from 'react-native-disqus';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ReactNativeDisqus id="1" shortname="indica-ai" />
      </SafeAreaView>
    </>
  );
};

export default App;
