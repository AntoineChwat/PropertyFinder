'use strict';

const React = require('react');

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Image = ReactNative.Image;
const View = ReactNative.View;
const TouchableHighlight = ReactNative.TouchableHighlight;
const Text = ReactNative.Text;

const createReactClass = require('create-react-class');

const ListItem = createReactClass({
  _onPress: function() {
    this.props.onPressItem(this.props.index, this.props.item);
  },
  //Catch undefined fields
  render: function() {
    const self = this;
    return(
      <TouchableHighlight
        onPress={self._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: self.props.item.img_url }} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{self.props.price}</Text>
              <Text style={styles.title}
                numberOfLines={1}>{self.props.item.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    )
  }
})

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

module.exports = ListItem;
