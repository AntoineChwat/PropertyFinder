'use strict';

const combineReducers = require('redux').combineReducers;

const searchReducer = require('./searchReducer');
const navReducer = require('./navReducer');

const rootReducer = combineReducers({
  search: searchReducer,
  nav: navReducer
});

module.exports = rootReducer;
