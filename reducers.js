"use strict";

const AppNavigator = require('./AppNavigator');

var combineReducers = require('redux').combineReducers;

const searchInitialState = {
  isLoading: false,
  returnedError: false,
  result: {},
  mesage: ""
};

const searchReducer = function(state = searchInitialState, action) {
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
      }
    case "UPDATE_MESSAGE":
      return {
        ...state,
        message: action.message
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
