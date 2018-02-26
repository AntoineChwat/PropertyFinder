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

const SearchBar = require('./Components').SearchBar;

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'https://api.nestoria.co.uk/api?' + querystring;
}

const SearchPage = createReactClass({

  getInitialState: function() {
    return {
      searchString: 'London',
      isLoading: false,
      message: ''
    }
  },

  _onSearchTextChanged: function(event) {
    this.setState({ searchString: event.nativeEvent.text });
  },

  _executeQuery: function(query) {
    console.log(query);
    this.setState({
      isLoading: true
    });
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        })
      );
  },

  _onSearchPressed: function() {
    Keyboard.dismiss()
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  },

  _handleResponse: function(response) {
    this.setState({ isLoading: false , message: '' });
    if (response.application_response_code.substr(0, 1) === '1') {
      this.props.navigation.navigate(
        'Results', {listings: response.listings}
      );
    } else {
      this.setState({ message: 'Location not recognized; please try again.'});
    }
  },

  render: function() {
    const self = this;
    return (
      <SearchBar
        isLoading = {self.state.isLoading}
        searchString = {self.state.searchString}
        message = {self.state.message}
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
