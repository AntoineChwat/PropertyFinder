'use strict';

const React = require('react');

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const TextInput = ReactNative.TextInput;
const View = ReactNative.View;
const Button = ReactNative.Button;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const SearchBar = createReactClass({
  propTypes: {
    _onSearchTextChanged: PropTypes.func.isRequired,
    _onSearchPressed: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    searchString: PropTypes.string
  },

  render: function() {
    return (
      <View style={styles.flowRight}>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={styles.searchInput}
          value={this.props.searchString}
          onChange={this.props._onSearchTextChanged}
          onSubmitEditing={this.props._onSearchPressed}
          placeholder='Search via name or postcode'
          returnKeyType="search"
        />
        <Button
          onPress={this.props._onSearchPressed}
          disabled={this.props.isLoading}
          color='#48BBEC'
          title='Go'
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
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
    color: '#48BBEC'
  }
});

module.exports = SearchBar;
