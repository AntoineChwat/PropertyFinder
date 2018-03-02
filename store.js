'use strict';

const createStore = require('redux').createStore;
const rootReducer = require('./reducers');

const store = createStore(rootReducer);

module.exports = store;
