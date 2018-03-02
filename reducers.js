'use strict';

const AppNavigator = require('./AppNavigator');

const combineReducers = require('redux').combineReducers;

const initialSearchState = {
  isLoading: false,
  result: {},
  mesage: '',
  searchString: "London",
  item: {}
};

const searchReducer = function(state = initialSearchState, action) {
  switch(action.type) {
    case "START_LOADING":
      return (
        Object.assign({}, state, {
          isLoading: true,
          message: ''
        })
      );
    case "RETURN_RESULT":
      return (
        Object.assign({}, state, {
          isLoading: false,
          result: Object.assign({}, action.result)
        })
      );
    case "UPDATE_SEARCH_STRING":
      return (
        Object.assign({}, state, {
          searchString: action.searchString
        })
      );
    case "RETURN_ERROR":
      return (
        Object.assign({}, state, {
          isLoading: false,
          message: action.message
        })
      );
    case "RETURN_ITEM":
      return (
        Object.assign({}, state, {
          item: Object.assign({}, action.item)
        })
      )
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
