/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict'

 const React = require('react');
 const Component = React.Component;

 const ReactNative = require('react-native');
 const Platform = ReactNative.Platform;
 const StyleSheet = ReactNative.StyleSheet;
 const Text = ReactNative.Text;
 const View = ReactNative.View;

 const createReactClass = require('create-react-class');

 const StackNavigator = require('react-navigation').StackNavigator;

 const SearchPage = require('./SearchPage');
 const SearchResults = require('./SearchResults')
 const PropertyView = require ('./PropertyView')

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};

const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Property: {screen: PropertyView},
});

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

module.exports = App;
