/**
 * @fileoverview  This file contains all the actions and thunks of our app
 *
 * @author        Antoine Chwat
 *
 * @namespace     actions
 */

const NavigationActions = require('react-navigation').NavigationActions;

const urlForQueryAndPage = require('../utils/urlForQueryAndPage');

/**
 * Tells our application to start loading
 *
 * @returns {Object} action to start loading
 *
 * @memberof actions
 */
const startLoading = function() {
  return {
    type: 'START_LOADING'
  };
};

/**
 * Tells our application to update its result and to stop loading
 *
 * @param   {Object} result new result
 *
 * @returns {Object} action to update the result and stop loading
 *
 * @memberof actions
 */
const returnResult = function(result) {
  return {
    type: 'RETURN_RESULT',
    result
  };
};

/**
 * Tells our application to update the search string
 *
 * @param   {string} searchString new search string
 *
 * @returns {Object} action to update the search string
 *
 * @memberof actions
 */
const updateSearchString = function(searchString) {
  return {
    type: 'UPDATE_SEARCH_STRING',
    searchString
  };
};

/**
 * Tells our application to return an error message and to stop loading
 *
 * @param   {string} message error message to display
 *
 * @returns {Object} action to update the message and stop loading
 *
 * @memberof actions
 */
const returnError = function(message) {
  return {
    type: 'RETURN_ERROR',
    message: message
  };
};

/**
 * Tells our application to update its item
 *
 * @param   {Object} item item to return
 *
 * @returns {Object} action to update the item
 *
 * @memberof actions
 */
const returnItem = function(item) {
  return {
    type: 'RETURN_ITEM',
    item
  };
};

/**
 * Executes a fetch on the Nestor API
 *
 * @param   {string} searchString search term used to query the API
 *
 * @returns {Object} a dispatch to either get results and get to next page or return an error
 *
 * @memberof actions
 */
const getResult = function(searchString) {
  return (dispatch) => {
    dispatch(startLoading());
    fetch(urlForQueryAndPage('place_name', searchString, 1))
      .then(response => response.json())
      .then(json => {
        if (json.response.application_response_code.substr(0, 1) !== '1') {
          throw 'This location does not exist madafucka!';
        } else {
          dispatch(returnResult(json.response));
          dispatch(NavigationActions.navigate({ routeName: 'Results' }));
        }
      })
      .catch(error => {
        dispatch(returnError('An error occured: ' + error));
      });
  };
};

module.exports = {
  startLoading,
  returnResult,
  updateSearchString,
  returnError,
  returnItem,
  getResult
};
