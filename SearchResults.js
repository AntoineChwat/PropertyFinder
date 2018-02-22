'use strict';

const React = require('react');
const Component = React.Component;

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Image = ReactNative.Image;
const View = ReactNative.View;
const TouchableHighlight = ReactNative.TouchableHighlight;
const FlatList = ReactNative.FlatList;
const Text = ReactNative.Text;

const createReactClass = require('create-react-class');

const ListItem = createReactClass({
  _onPress: function() {
    this.props.onPressItem(this.props.index, this.props.item);
  },

  render: function() {
    const item = this.props.item;
    var price = item.price_formatted
    if (typeof price != 'undefined') {
      price = item.price_formatted.split(' ')[0];
    } else {
      price = 'error'
    }
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: item.img_url }} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.title}
                numberOfLines={1}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
})

const SearchResults = createReactClass({
  _keyExtractor: function(item, index) {
    return index.toString();
  },

  _renderItem: function({item, index}) {
    return (
      <ListItem
        item={item}
        index={index}
        onPressItem={this._onPressItem}
      />
    )
  },

  _onPressItem: function(index, item) {
    console.log("Pressed row: "+index);
    this.props.navigation.navigate(
      'Property', {item: item}
    );
  },

  render: function() {
    const { params } = this.props.navigation.state;
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

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
});

module.exports = SearchResults;
