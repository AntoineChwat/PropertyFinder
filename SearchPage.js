'use strict';

const React = require('react');

const ReactNative = require('react-native');
const Keyboard = ReactNative.Keyboard;

const createReactClass = require('create-react-class');

const SearchBar = require('./Components').SearchBar;

const SearchPage = createReactClass({

  _onSearchTextChanged: function(event) {
    this.props.modifySearchString(event.nativeEvent.text);
  },

  _onSearchPressed: function() {
    Keyboard.dismiss()
    this.props.onSearchPressed(this.props.search.searchString);
  },

  render: function() {
    const self = this;
    return (
      <SearchBar
        isLoading = {this.props.search.isLoading}
        searchString = {this.props.search.searchString}
        message = {this.props.search.message}
        _onSearchTextChanged = {self._onSearchTextChanged}
        _onSearchPressed = {self._onSearchPressed}
      />
    );
  }
});
SearchPage.navigationOptions = {
  title: 'Property Finder'
};

//Declare PropTypes

module.exports = SearchPage;
