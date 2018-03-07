/**
 * @fileoverview  This is the root reducer of our application
 *
 * @author        Antoine Chwat
 *
 * @namespace     rootReducer
 */
'use strict';

const combineReducers = require('redux').combineReducers;

const searchReducer = require('./searchReducer');
const navReducer = require('./navReducer');

/**
 * We combine our auxilliary reducers here
 *
 * @param   {Object} reducers the reducers we wish to combine
 *
 * @returns {Object} The combination of our reducers
 *
 * @memberof rootReducer
 */
const rootReducer = combineReducers({
  search: searchReducer,
  nav: navReducer
});

module.exports = rootReducer;
