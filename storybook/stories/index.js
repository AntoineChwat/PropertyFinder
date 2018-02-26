import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import ListItem from './ListItem';
import DisplayImage from './DisplayImage';
import SearchBarTest from './SearchBar';
import ListItemTest from './ListItem'

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

storiesOf('List', module).add('Item', () => <ListItem/>);

storiesOf('Detailed', module).add('Image', () => <DisplayImage/>);

storiesOf('Test', module)
  .add('SearchBar', () => (
    <SearchBarTest/>
  ))
  .add('ListItem', () => (
    <ListItemTest/>
  ));
