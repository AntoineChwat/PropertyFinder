/**
 * @fileoverview  This component renders the search results
 *
 * @author        Antoine Chwat
 *
 * @namespace     SearchResults
 */
'use strict';

const React = require('react');

const ReactNative = require('react-native');
const FlatList = ReactNative.FlatList;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const ListItem = require('./ListItem');

/**
 * The search results are rendered in this class
 * @class
 *
 * @memberof SearchResults
 */
const SearchResults = createReactClass({
  propTypes: {
    result: PropTypes.object.isRequired,
    onSearchPressed: PropTypes.func.isRequired
  },

  /**
   * Method to extract a unique key from an item at a specific index
   *
   * @param    {Object} item  item to extract key from
   * @param    {number} index index associated to item
   *
   * @returns  {string}       The extracted key
   *
   * @memberof SearchResults
   */
  _keyExtractor: function(item, index) {
    return index.toString();
  },

  /**
   * Method to render a list item for each element in the results
   *
   * @param    {Object} item item taken from the results by the flat list
   *
   * @returns  {ListItem}    a list item
   *
   * @memberof SearchResults
   */
  _renderItem: function({item}) {
    const self = this;
    return (
      <ListItem
        item={item}
        onPressItem={self._onPressItem}
      />
    );
  },

  /**
   * Calls a function from its container to handle a touchable highlight press
   *
   * @memberof SearchResults
   */
  _onPressItem: function(index, item) {
    this.props.onSearchPressed(item);
  },

  /**
   * The render displays a flat list which shows all the results returned
   *
   * @returns  {FlatList} A list of results
   *
   * @memberof SearchResults
   */
  render: function() {
    const params = this.props.result;
    return (
      <FlatList
        data={params.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
});
SearchResults.navigationOptions = {
  title: 'Results'
};

module.exports = SearchResults;
