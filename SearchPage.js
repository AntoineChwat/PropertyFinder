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
    const spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> : null;
    return (
      <ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name or postcode.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            value={self.state.searchString}
            onChange={self._onSearchTextChanged}
            onSubmitEditing={self._onSearchPressed}
            placeholder='Search via name or postcode'
            returnKeyType="search"
          />
          <Button
            onPress={self._onSearchPressed}
            disabled={self.state.isLoading}
            color='#48BBEC'
            title='Go'
          />
        </View>
        <Image source={require('./Resources/house.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>
          {this.state.message}
        </Text>
      </ScrollView>
    );
  }
});
SearchPage.navigationOptions = {
  title: 'Property Finder'
};

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
});

module.exports = SearchPage;
