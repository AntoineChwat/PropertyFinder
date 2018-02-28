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

 const Provider = require('react-redux').Provider;
 const store = require('./store');

 const SearchPageContainer = require('./SearchPageContainer');
 const SearchResults = require('./SearchResults')
 const PropertyView = require ('./PropertyView')

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};

const Main = StackNavigator({
  Home: { screen: SearchPageContainer },
  Results: { screen: SearchResults },
  Property: {screen: PropertyView},
});

const App = createReactClass({
  render() {
    return(
      <Provider store = {store}>
        <Main/>
      </Provider>
    )
  }
})

module.exports = App;
