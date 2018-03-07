/**
 * @fileoverview  This component renders the App Navigator
 *
 * @author        Antoine Chwat
 *
 * @namespace     App
 */

'use strict';

const React = require('react');

const createReactClass = require('create-react-class');

const PropTypes = require('prop-types');

const ReactNavigation = require ('react-navigation');
const addNavigationHelpers = ReactNavigation.addNavigationHelpers;

const ReactNavigationReduxHelpers = require('react-navigation-redux-helpers');
const createReduxBoundAddListener = ReactNavigationReduxHelpers.createReduxBoundAddListener;
const createReactNavigationReduxMiddleware = ReactNavigationReduxHelpers.createReactNavigationReduxMiddleware;

const AppNavigator = require('../utils/AppNavigator');

createReactNavigationReduxMiddleware(
 'root',
 state => state.nav,
);
const addListener = createReduxBoundAddListener('root');

/**
 * The application is rendered in this class
 * @class
 *
 * @memberof App
 */
const App = createReactClass({
  propTypes: {
    dispatch: PropTypes.any,
    nav: PropTypes.any
  },

  /**
   * The render returns our app navigator's default view
   *
   * @returns {AppNavigator} The navigator which displays the app's pages
   *
   * @memberof App
   */
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener: addListener
      })} />
    );
  }
});

module.exports = App;
