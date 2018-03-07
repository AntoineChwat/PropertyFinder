/**
 * @fileoverview  This is the reducer linked to the search part of our application
 *
 * @author        Antoine Chwat
 *
 * @namespace     searchReducer
 */
'use strict';

const initialSearchState = {
  isLoading: false,
  result: {},
  message: '',
  searchString: 'London',
  item: {}
};

/**
 * The search reducer updates the state linked to a search based on the actions it receives
 *
 * @param    {Object} state  the search state
 * @param    {Object} action a search action
 *
 * @returns  {Object} The updated search state
 *
 * @memberof searchReducer
 */
const searchReducer = function(state = initialSearchState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return (
        Object.assign({}, state, {
          isLoading: true,
          message: ''
        })
      );
    case 'RETURN_RESULT':
      return (
        Object.assign({}, state, {
          isLoading: false,
          result: Object.assign({}, action.result)
        })
      );
    case 'UPDATE_SEARCH_STRING':
      return (
        Object.assign({}, state, {
          searchString: action.searchString
        })
      );
    case 'RETURN_ERROR':
      return (
        Object.assign({}, state, {
          isLoading: false,
          message: action.message
        })
      );
    case 'RETURN_ITEM':
      return (
        Object.assign({}, state, {
          item: Object.assign({}, action.item)
        })
      );
    default:
      return state;
  }
};

module.exports = searchReducer;
