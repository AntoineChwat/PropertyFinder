'use strict';

const React = require('react');

const ReactNative = require('react-native');
const FlatList = ReactNative.FlatList;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const ListItem = require('./ListItem');

const SearchResults = createReactClass({
  propTypes: {
    onSearchPressed: PropTypes.func.isRequired,
    search: PropTypes.shape({
      result: PropTypes.object.isRequired
    })
  },

  _keyExtractor: function(item, index) {
    return index.toString();
  },

  _renderItem: function({item, index}) {
    const self = this;
    return (
      <ListItem
        item={item}
        onPressItem={self._onPressItem}
      />
    );
  },

  _onPressItem: function(index, item) {
    this.props.onSearchPressed(item);
  },

  render: function() {
    const params = this.props.search.result;
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
