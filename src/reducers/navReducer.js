'use strict';

const AppNavigator = require('../utils/AppNavigator');

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Home');
const initialNavState = router.getStateForAction(mainNavAction);

const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

module.exports = navReducer;
