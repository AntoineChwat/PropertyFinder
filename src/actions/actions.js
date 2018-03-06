const NavigationActions = require('react-navigation').NavigationActions;

const urlForQueryAndPage = require('../utils/urlForQueryAndPage');

const startLoading = function() {
  return {
    type: 'START_LOADING'
  };
};

const returnResult = function(result) {
  return {
    type: 'RETURN_RESULT',
    result
  };
};

const updateSearchString = function(searchString) {
  return {
    type: 'UPDATE_SEARCH_STRING',
    searchString
  };
};

const returnError = function(message) {
  return {
    type: 'RETURN_ERROR',
    message: message
  };
};

const returnItem = function(item) {
  return {
    type: 'RETURN_ITEM',
    item
  };
};

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
