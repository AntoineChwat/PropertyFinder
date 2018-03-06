'use strict';

const StackNavigator = require('react-navigation').StackNavigator;

const SearchPageContainer = require('../containers/SearchPageContainer');
const SearchResultsContainer = require('../containers/SearchResultsContainer');
const PropertyDetailsContainer = require ('../containers/PropertyDetailsContainer');

const AppNavigator = StackNavigator({
  Home: { screen: SearchPageContainer },
  Results: { screen: SearchResultsContainer },
  Property: {screen: PropertyDetailsContainer}
}, {
  initialRouteName: 'Home'
});

module.exports = AppNavigator;
