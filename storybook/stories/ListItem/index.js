const React = require('react');

const ReactNative = require('react-native');

const createReactClass = require('create-react-class');

import { storiesOf } from '@storybook/react-native';

const ListItem = require('../../../Components').ListItem;

const item1 = {
  item: {
    title: "General Kenobi",
    img_url: "https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768"
  },
  price: "Hello there"
};

const item2 = {
  item: {
    title: undefined,
    img_url: "https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768"
  },
  price: undefined
};

const item3 = {
  item: {
    title: "General Kenobi",
    img_url: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/2a/The_Lord_of_The_Rings_-_Gandalf_The_Grey.png/revision/latest/scale-to-width-down/300?cb=20160321085616"
  },
  price: "Hello there"
};

const item4 = {
  item: {
    title: "General Kenobi",
    img_url: undefined
  },
  price: "Hello there"
};



storiesOf('ListItem', module)
  .add('Standard test', () => (
    <ListItem
      item = {item1.item}
      price = {item1.price}
      onPressItem = {() => console.log("Item pressed")}
    />
  ))
  .add('Empty text fields', () => (
    <ListItem
      item = {item2.item}
      price = {item2.price}
      onPressItem = {() => console.log("Item pressed")}
    />
  ))
  .add('Vertical image', () => (
    <ListItem
      item = {item3.item}
      price = {item3.price}
      onPressItem = {() => console.log("Item pressed")}
    />
  ))
  .add('No image', () => (
    <ListItem
      item = {item4.item}
      price = {item4.price}
      onPressItem = {() => console.log("Item pressed")}
    />
  ))
