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

import { storiesOf } from '@storybook/react-native';

const SearchBar = require('../../../Components').SearchBar;

storiesOf('SearchBar', module)
  .add('Standard test', () => (
    <SearchBar
      isLoading = {false}
      searchString = "London"
      message = {undefined}
      _onSearchTextChanged = {() => console.log("Text changed")}
      _onSearchPressed = {() => console.log("Search pressed")}
    />
  ))
  .add('Spinner test', () => (
    <SearchBar
      isLoading = {true}
      searchString = "London"
      message = {undefined}
      _onSearchTextChanged = {() => console.log("Text changed")}
      _onSearchPressed = {() => console.log("Search pressed")}
    />
  ))
  .add('Empty text input', () => (
    <SearchBar
      isLoading = {false}
      searchString = {undefined}
      message = {undefined}
      _onSearchTextChanged = {() => console.log("Text changed")}
      _onSearchPressed = {() => console.log("Search pressed")}
    />
  ))
  .add('Message test', () => (
    <SearchBar
      isLoading = {false}
      searchString = "London"
      message = {"Hello there!\nGeneral Kenobi!"}
      _onSearchTextChanged = {() => console.log("Text changed")}
      _onSearchPressed = {() => console.log("Search pressed")}
    />
  ));
