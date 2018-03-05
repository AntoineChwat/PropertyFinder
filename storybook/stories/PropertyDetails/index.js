const React = require('react');

import { storiesOf } from '@storybook/react-native';

const PropertyDetails = require('../../../Components').PropertyDetails;

var param1 = {
  title: 'Title',
  price_formatted: 'Price',
  summary: 'This is a summary mate',
  img_url: 'https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768'
};

var param2 = {
  title: undefined,
  price_formatted: undefined,
  summary: undefined,
  img_url: 'https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C1%2C1536%2C864&width=768'
};

var param3 = {
  title: 'Title',
  price_formatted: 'Price',
  summary: 'This is a summary mate',
  img_url: 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/2a/The_Lord_of_The_Rings_-_Gandalf_The_Grey.png/revision/latest/scale-to-width-down/300?cb=20160321085616'
};

var param4 = {
  title: 'Title',
  price_formatted: 'Price',
  summary: 'This is a summary mate',
  img_url: undefined
};

storiesOf('PropertyDetails', module)
  .add('Standard test', () => (
    <PropertyDetails
      params = {param1}
    />
  ))
  .add('Empty text fields', () => (
    <PropertyDetails
      params = {param2}
    />
  ))
  .add('Vertical image', () => (
    <PropertyDetails
      params = {param3}
    />
  ))
  .add('No image', () => (
    <PropertyDetails
      params = {param4}
    />
  ));
