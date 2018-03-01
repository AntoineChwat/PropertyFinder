"use strict";

const AppNavigator = require('./AppNavigator');

var combineReducers = require('redux').combineReducers;

const initialSearchState = {
  isLoading: false,
  returnedError: false,
  result: {},
  mesage: "",
  searchString: "London",
  item: {}
};

const searchReducer = function(state = initialSearchState, action) {
  switch(action.type) {
    case "START_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false
      };
    case "RETURN_RESULT":
      return {
        ...state,
        result: action.result
      };
    case "UPDATE_MESSAGE":
      return {
        ...state,
        message: action.message
      };
    case "UPDATE_SEARCH_STRING":
      return {
        ...state,
        searchString: action.searchString
      }
    case "RETURNED_ERROR":
      return {
        ...state,
        error: true
      }
    case "RETURN_ITEM":
      return {
        ...state,
        item: action.item
      }
    default:
      return state;
  }
}

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Home');
const initialNavState = router.getStateForAction(mainNavAction);

const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};


const rootReducer = combineReducers({
  search: searchReducer,
  nav: navReducer
})

module.exports = rootReducer;
