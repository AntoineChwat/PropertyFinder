const React = require('react');
const Component = React.Component;

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Image = ReactNative.Image;
const View = ReactNative.View;
const TouchableHighlight = ReactNative.TouchableHighlight;
const Text = ReactNative.Text;

const createReactClass = require('create-react-class');

const ListItem = require('../../../Components').ListItem;

const ListItemTest = createReactClass({
  render: function() {
    return(
      <ListItem
        title = "Hello there"
        price = "General Kenobi"
        _onPressItem = {() => console.log("pressed")}
      />
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

module.exports = ListItemTest;
