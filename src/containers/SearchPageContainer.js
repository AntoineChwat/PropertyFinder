/**
 * @fileoverview  This is the search page container
 *
 * @author        Antoine Chwat
 *
 * @namespace     SearchPageContainer
 */
'use strict';

const connect = require('react-redux').connect;

const actions = require('../actions/actions');
const startLoading = actions.startLoading;
const returnResult = actions.returnResult;
const updateSearchString = actions.updateSearchString;
const returnError = actions.returnError;
const getResult = actions.getResult;

const SearchPage = require('../components/SearchPage');

/**
 * This function maps the useful part of our application's state to SearchPage's props
 *
 * @param    {Object} state the state of our application
 *
 * @returns  {Object} The loading state, search string and message
 *
 * @memberof SearchPageContainer
 */
const mapStateToProps = function(state) {
  return {
    isLoading: state.search.isLoading,
    searchString: state.search.searchString,
    message: state.search.message
  };
};

/**
 * This function maps useful actions to SearchPage's props
 *
 * @param    {function} dispatch the state of our application
 *
 * @returns  {Object}            A mapping of actions to SearchPage's props
 *
 * @memberof SearchPageContainer
 */
const mapDispatchToProps = function(dispatch) {
  return {
    startSearch: function() {
      dispatch(startLoading());
    },
    sendResult: function(result) {
      dispatch(returnResult(result));
    },
    modifySearchString: function(searchString) {
      dispatch(updateSearchString(searchString));
    },
    gotError: function(error) {
      dispatch(returnError('An error occured: ' + error));
    },
    onSearchPressed: function(searchString) {
      dispatch(getResult(searchString));
    }
  };
};

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

module.exports = SearchPageContainer;
