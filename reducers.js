"use strict";

var combineReducers = require('redux').combineReducers;

const initialState = {
  isLoading: false,
  returnedError: false,
  result: {},
  mesage: ""
};

const searchReducer = function(state = initialState, action) {
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

const rootReducer = combineReducers({
  search: searchReducer
})

module.exports = rootReducer;
