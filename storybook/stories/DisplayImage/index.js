'use strict';

const React = require('react');
const Component = React.Component;

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Image = ReactNative.Image;
const View = ReactNative.View;
const Text = ReactNative.Text;

const createReactClass = require('create-react-class');

const DisplayImage = createReactClass({
  render: function() {
    return (
      <View style = {{flex: 1}}>
        <Image style = {styles.picture}  resizeMode = "contain" source={require('../Resources/house.png')} />
        <Text style = {styles.textContainer}>
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: '#FF69B4'
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#00FF00'
  },
});

module.exports = DisplayImage;
