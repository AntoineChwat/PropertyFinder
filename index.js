'use strict';

const AppRegistry = require('react-native').AppRegistry;

const App = require('./src/containers/AppContainer');

AppRegistry.registerComponent('PropertyFinder', function(){
  return App;
});
