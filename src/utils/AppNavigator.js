/**
 * @fileoverview  This is the navigator responsible for switching between pages
 *
 * @author        Antoine Chwat
 *
 * @namespace     AppNavigator
 */
'use strict';

const StackNavigator = require('react-navigation').StackNavigator;

const SearchPageContainer = require('../containers/SearchPageContainer');
const SearchResultsContainer = require('../containers/SearchResultsContainer');
const PropertyDetailsContainer = require ('../containers/PropertyDetailsContainer');

/**
 * Create the app navigator
 *
 * @param    {Object} views   the pages in your application
 * @param    {Object} options options allowed by StackNavigator
 *
 * @memberof AppNavigator
 */
const AppNavigator = StackNavigator({
  Home: { screen: SearchPageContainer },
  Results: { screen: SearchResultsContainer },
  Property: {screen: PropertyDetailsContainer}
}, {
  initialRouteName: 'Home'
});

module.exports = AppNavigator;
