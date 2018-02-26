'use strict';

const React = require('react');

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Text = ReactNative.Text;
const TextInput = ReactNative.TextInput;
const View = ReactNative.View;
const Button = ReactNative.Button;
const ActivityIndicator = ReactNative.ActivityIndicator;
const Image = ReactNative.Image;
const Keyboard = ReactNative.Keyboard;
const ScrollView = ReactNative.ScrollView;

const createReactClass = require('create-react-class');

const SearchBar = createReactClass({
  render: function() {
    const self = this;
    const spinner = self.props.isLoading ?
      <ActivityIndicator size='large'/> : null;
    return (
      <ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name or postcode.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            value={self.props.searchString}
            onChange={self.props._onSearchTextChanged}
            onSubmitEditing={self.props._onSearchPressed}
            placeholder='Search via name or postcode'
            returnKeyType="search"
          />
          <Button
            onPress={self.props._onSearchPressed}
            disabled={self.props.isLoading}
            color='#48BBEC'
            title='Go'
          />
        </View>
        <Image source={require('../Resources/house.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>
          {self.props.message}
        </Text>
      </ScrollView>
    );
  }
})

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
});

module.exports = SearchBar;
