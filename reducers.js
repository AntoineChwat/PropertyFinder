"use strict";

const initialState = {
  isLoading: false
};

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case "START_LOADING":
      return {
        isLoading: true
      };
    case "STOP_LOADING":
      return {
        isLoading: false
      };
    default:
      return state;
  }
}

module.exports = rootReducer;
