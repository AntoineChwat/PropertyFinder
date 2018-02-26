'use strict';

const React = require('react');
const Component = React.Component;

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Image = ReactNative.Image;
const View = ReactNative.View;
const Text = ReactNative.Text;

const createReactClass = require('create-react-class');

const PropertyDetails = require('./Components').PropertyDetails;

const PropertyView = createReactClass({
  render: function() {
    const { params } = this.props.navigation.state;
    console.log(params)
    return (
      <PropertyDetails
        params = {params}
      />
      // <View style = {{flex: 1}}>
      //   <Image style = {styles.picture}  resizeMode = "contain" source={{ uri: params.item.img_url }} />
      //   <View style = {styles.textContainer}>
      //     <View style = {styles.header}>
      //       <Text style = {styles.title}>
      //         {params.item.title}
      //       </Text>
      //       <Text style = {styles.price}>
      //         {params.item.price_formatted}
      //       </Text>
      //     </View>
      //     <Text style = {styles.description}>
      //       {params.item.summary}
      //     </Text>
      //   </View>
      // </View>
    );
  }
})
PropertyView.navigationOptions = {
  title: 'Property'
};

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  textContainer: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  description: {
    flex: 3,
    top: 10
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
    top: 5
  },
  title: {
    fontSize: 20,
    color: '#656565',
    top: 5
  },
});

module.exports = PropertyView;
