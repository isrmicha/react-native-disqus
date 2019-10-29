# React Native Disqus


**React Native Disqus** let you simple implement Disqus chat in your APP.


## Platforms Supported

- [x] iOS
- [x] Android

## Getting Started

*Install with Yarn*

`yarn add react-native-disqus` 

or

*Install with Npm*

`npm install react-native-disqus --save` 



## Usage

Import the `ReactNativeDisqus` component from `react-native-disqus` and use it like so:

```jsx
import React, { Component } from 'react';
import ReactNativeDisqus from 'react-native-disqus';

// ...
class MyWebComponent extends Component {
  render() {
    return (
      <ReactNativeDisqus shortname="INSERT_YOUR_DISQUS_SHORTNAME" id="UNIQUE_TOPIC_ID" />
    );
  }
}
```




