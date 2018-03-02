'use strict';

const React = require('react');

const ReactNative = require('react-native');
const Keyboard = ReactNative.Keyboard;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const SearchBar = require('./Components').SearchBar;

const SearchPage = createReactClass({
  propTypes: {
    modifySearchString: PropTypes.func.isRequired,
    onSearchPressed: PropTypes.func.isRequired,
    search: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      searchString: PropTypes.string,
      message: PropTypes.string
    })
  },

  _onSearchTextChanged: function(event) {
    this.props.modifySearchString(event.nativeEvent.text);
  },

  _onSearchPressed: function() {
    Keyboard.dismiss();
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

module.exports = SearchPage;
