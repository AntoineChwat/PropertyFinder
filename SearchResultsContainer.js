'use strict';

const connect = require('react-redux').connect;

import { NavigationActions } from 'react-navigation';

const actions = require('./actions');
const returnItem = actions.returnItem;
const SearchResults = require('./SearchResults');

const mapStateToProps = function(state) {
  return (
    Object.assign({}, state, {
      result: Object.assign({}, state.result)
    })
  );
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
