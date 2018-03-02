'use strict';

const React = require('react');


import { storiesOf } from '@storybook/react-native';

const SearchBar = require('../../../Components').SearchBar;

storiesOf('SearchBar', module)
  .add('Standard test', () => (
    <SearchBar
      isLoading = {false}
      searchString = 'London'
      message = {undefined}
      _onSearchTextChanged = {() => console.log('Text changed')}
      _onSearchPressed = {() => console.log('Search pressed')}
    />
  ))
  .add('Spinner test', () => (
    <SearchBar
      isLoading = {true}
      searchString = "London"
      message = {undefined}
      _onSearchTextChanged = {() => console.log('Text changed')}
      _onSearchPressed = {() => console.log('Search pressed')}
    />
  ))
  .add('Empty text input', () => (
    <SearchBar
      isLoading = {false}
      searchString = {undefined}
      message = {undefined}
      _onSearchTextChanged = {() => console.log('Text changed')}
      _onSearchPressed = {() => console.log('Search pressed')}
    />
  ))
  .add('Message test', () => (
    <SearchBar
      isLoading = {false}
      searchString = 'London'
      message = {'Hello there!\nGeneral Kenobi!'}
      _onSearchTextChanged = {() => console.log('Text changed')}
      _onSearchPressed = {() => console.log('Search pressed')}
    />
  ));
