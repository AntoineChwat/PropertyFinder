const React = require('react');

import { storiesOf } from '@storybook/react-native';

const ListItem = require('../../../Components').ListItem;

const item1 = {
  title: 'Title',
  price_formatted: 'Price',
  img_url: 'https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768'
};

const item2 = {
  title: undefined,
  price_formatted: undefined,
  img_url: 'https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768'
};

const item3 = {
  title: 'Title',
  price_formatted: 'Price',
  img_url: 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/2a/The_Lord_of_The_Rings_-_Gandalf_The_Grey.png/revision/latest/scale-to-width-down/300?cb=20160321085616'
};

const item4 = {
  title: 'Title',
  price_formatted: 'Price',
  img_url: undefined
};


storiesOf('ListItem', module)
  .add('Standard test', () => (
    <ListItem
      item = {item1}
      onPressItem = {() => console.log('Item pressed')}
    />
  ))
  .add('Empty text fields', () => (
    <ListItem
      item = {item2}
      onPressItem = {() => console.log('Item pressed')}
    />
  ))
  .add('Vertical image', () => (
    <ListItem
      item = {item3}
      onPressItem = {() => console.log('Item pressed')}
    />
  ))
  .add('No image', () => (
    <ListItem
      item = {item4}
      onPressItem = {() => console.log('Item pressed')}
    />
  ));
