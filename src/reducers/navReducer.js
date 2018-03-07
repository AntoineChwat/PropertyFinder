/**
 * @fileoverview  This is the reducer linked to the navigation
 *
 * @author        Antoine Chwat
 *
 * @namespace     navReducer
 */
'use strict';

const AppNavigator = require('../utils/AppNavigator');

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Home');
const initialNavState = router.getStateForAction(mainNavAction);

/**
 * The navigation reducer updates the navigation state based on the actions it receives
 *
 * @param    {Object} state  the state of the navigation
 * @param    {Object} action a navigation action
 *
 * @returns  {Object} The updated navigation state
 *
 * @memberof navReducer
 */
const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

module.exports = navReducer;
