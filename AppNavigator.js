const StackNavigator = require('react-navigation').StackNavigator;

const SearchPageContainer = require('./SearchPageContainer');
const SearchResultsContainer = require('./SearchResultsContainer');
const PropertyViewContainer = require ('./PropertyViewContainer');

const AppNavigator = StackNavigator({
  Home: { screen: SearchPageContainer },
  Results: { screen: SearchResultsContainer },
  Property: {screen: PropertyViewContainer},
}, {
  initialRouteName: 'Home'
});

module.exports = AppNavigator;
