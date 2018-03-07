/**
 * @fileoverview  This is the search results container
 *
 * @author        Antoine Chwat
 *
 * @namespace     SearchResultsContainer
 */
'use strict';

const connect = require('react-redux').connect;

import { NavigationActions } from 'react-navigation';

const actions = require('../actions/actions');
const returnItem = actions.returnItem;
const SearchResults = require('../components/SearchResults');

/**
 * This function maps the useful part of our application's state to SearchResults' props
 *
 * @param    {Object} state the state of our application
 *
 * @returns  {Object} The result
 *
 * @memberof SearchResultsContainer
 */
const mapStateToProps = function(state) {
  return {
    result: state.search.result
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onSearchPressed(item) {
      dispatch(NavigationActions.navigate({ routeName: 'Property' }));
      dispatch(returnItem(item));
    }
  };
};

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

module.exports = SearchResultsContainer;
