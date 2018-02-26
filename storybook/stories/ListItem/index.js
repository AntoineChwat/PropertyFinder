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
    const item = {
      title: "Hello there",
      img_url: "https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768"
    }
    return(
      <ListItem
        item = {item}
        price = {"General Kenobi"}
        onPressItem = {() => console.log("pressed")}
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
