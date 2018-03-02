'use strict';

const React = require('react');

const createReactClass = require('create-react-class');

const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const store = require('./store');

const App = require('./App');

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const AppContainer = createReactClass({
  render() {
    return (
      <Provider store = {store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
});

module.exports = AppContainer;
