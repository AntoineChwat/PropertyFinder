import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import SearchBarTest from './SearchBar';
import ListItemTest from './ListItem'
import PropertyDetailsTest from './PropertyDetails'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('SearchBar', module)
  .add('Test 1', () => (
    <SearchBarTest/>
  ));

storiesOf('ListItem', module)
  .add('Test 1', () => (
    <ListItemTest/>
  ));

storiesOf('PropertyDetails', module)
  .add('Test 1', () => (
    <PropertyDetailsTest/>
  ));
