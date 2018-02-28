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
 const SearchResultsContainer = require('./SearchResultsContainer')
 const PropertyViewContainer = require ('./PropertyViewContainer')

type Props = {};

const Main = StackNavigator(
  {
    Home: { screen: SearchPageContainer },
    Results: { screen: SearchResultsContainer },
    Property: {screen: PropertyViewContainer},
  },
  {
    initialRouteName: 'Home'
  }
);

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
