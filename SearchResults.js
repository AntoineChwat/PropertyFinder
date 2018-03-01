'use strict';

const React = require('react');
const Component = React.Component;

const ReactNative = require('react-native');
const FlatList = ReactNative.FlatList;

const createReactClass = require('create-react-class');

const ListItem = require('./Components').ListItem

const SearchResults = createReactClass({
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
    )
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
})
SearchResults.navigationOptions = {
  title: 'Results'
};

module.exports = SearchResults;
