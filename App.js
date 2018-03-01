'use strict'

const React = require('react');

const createReactClass = require('create-react-class');

const ReactNavigation = require ('react-navigation');
const addNavigationHelpers = ReactNavigation.addNavigationHelpers;

const ReactNavigationReduxHelpers = require('react-navigation-redux-helpers');
const createReduxBoundAddListener = ReactNavigationReduxHelpers.createReduxBoundAddListener;
const createReactNavigationReduxMiddleware = ReactNavigationReduxHelpers.createReactNavigationReduxMiddleware;

const AppNavigator = require('./AppNavigator');

const middleware = createReactNavigationReduxMiddleware(
 "root",
 state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

const App = createReactClass({
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener: addListener,
      })} />
    );
  }
})

module.exports = App;
