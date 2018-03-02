'use strict';

const createStore = require('redux').createStore;
const rootReducer = require('./Reducers/rootReducer');

const store = createStore(rootReducer);

module.exports = store;
