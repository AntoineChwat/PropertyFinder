/**
 * @fileoverview  This component renders a search page
 *
 * @author        Antoine Chwat
 *
 * @namespace     SearchPage
 */
'use strict';

const React = require('react');

const ReactNative = require('react-native');
const Keyboard = ReactNative.Keyboard;
const StyleSheet = ReactNative.StyleSheet;
const Text = ReactNative.Text;
const ActivityIndicator = ReactNative.ActivityIndicator;
const Image = ReactNative.Image;
const ScrollView = ReactNative.ScrollView;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const SearchBar = require('./SearchBar');

/**
 * The search page is rendered in this class
 * @class
 *
 * @memberof SearchPage
 */
const SearchPage = createReactClass({
  propTypes: {
    isLoading: PropTypes.bool.isRequired,
    searchString: PropTypes.string,
    message: PropTypes.string,
    modifySearchString: PropTypes.func.isRequired,
    onSearchPressed: PropTypes.func.isRequired
  },

  /**
   * Calls a function from its container to handle text change
   *
   * @param    {Object} event The event registered when the search string is modified
   *
   * @memberof SearchPage
   */
  _onSearchTextChanged: function(event) {
    this.props.modifySearchString(event.nativeEvent.text);
  },

  /**
   * Calls a function from its container to a handle search button press and to hide the keyboard
   *
   * @memberof SearchPage
   */
  _onSearchPressed: function() {
    Keyboard.dismiss();
    this.props.onSearchPressed(this.props.searchString);
  },

  /**
   * The render displays a scroll view containing the whole search page
   *
   * @returns  {ScrollView} An unscrollable scroll view (to auto hide the keyboard when clicking anywhere on the view) containing the search page
   *
   * @memberof SearchPage
   */
  render: function() {
    const spinner = this.props.isLoading ?
      <ActivityIndicator size='large'/> : null;
    return (
      <ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name or postcode.
        </Text>
        <SearchBar
          isLoading = {this.props.isLoading}
          searchString = {this.props.searchString}
          _onSearchTextChanged = {this._onSearchTextChanged}
          _onSearchPressed = {this._onSearchPressed}
        />
        <Image source={require('../resources/house.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>
          {this.props.message}
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
  image: {
    width: 217,
    height: 138
  }
});

module.exports = SearchPage;
