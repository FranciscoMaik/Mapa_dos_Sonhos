/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Stack from './src/routers/StackList';

const App: () => React$Node = () => {
  return (
    <>
      <Stack />
    </>
  );
};

export default App;
