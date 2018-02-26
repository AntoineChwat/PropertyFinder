'use strict';

const React = require('react');
const Component = React.Component;

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Text = ReactNative.Text;
const TextInput = ReactNative.TextInput;
const View = ReactNative.View;
const Button = ReactNative.Button;
const ActivityIndicator = ReactNative.ActivityIndicator;
const Image = ReactNative.Image;
const Keyboard = ReactNative.Keyboard;
const ScrollView = ReactNative.ScrollView;

const createReactClass = require('create-react-class');

const SearchBar = require('../../../Components').SearchBar;

const SearchBarTest = createReactClass({
  render: function() {
    return(
      <SearchBar
        isLoading = {false}
        searchString = "London"
        message = {"Hello there!\nGeneral Kenobi!"}
        _onSearchTextChanged = {() => console.log("whatevs")}
        _onSearchPressed = {() => console.log("whatevs")}
      />
    )
  }
})

module.exports = SearchBarTest;
