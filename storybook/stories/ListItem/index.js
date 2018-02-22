const React = require('react');
const Component = React.Component;

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Image = ReactNative.Image;
const View = ReactNative.View;
const TouchableHighlight = ReactNative.TouchableHighlight;
const Text = ReactNative.Text;

const createReactClass = require('create-react-class');

const ListItem = createReactClass({
  render: function() {
    return(
      <TouchableHighlight
        onPress={() => console.log("Item pressed")}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={require('../Resources/house.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{'Too expensive'}</Text>
              <Text style={styles.title}
                numberOfLines={1}>{'Property'}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    )
  }
})

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
});

module.exports = ListItem;
