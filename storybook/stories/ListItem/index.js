const React = require('react');

const ReactNative = require('react-native');

const createReactClass = require('create-react-class');

const ListItem = require('../../../Components').ListItem;

const item1 = {
  item: {
    title: undefined,
    img_url: undefined
  },
  price: undefined
};

const item2 = {
  item: {
    title: "General Kenobi",
    img_url: "https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768"
  },
  price: "Hello there"
}

const ListItemTest = createReactClass({
  render: function() {
    return(
      // <ListItem
      //   item = {item1.item}
      //   price = {item1.price}
      //   onPressItem = {() => console.log("pressed")}
      // />
      <ListItem
        item = {item2.item}
        price = {item2.price}
        onPressItem = {() => console.log("pressed")}
      />
    )
  }
})

module.exports = ListItemTest;
