const React = require('react');

const ReactNative = require('react-native');

const createReactClass = require('create-react-class');

const PropertyDetails = require('../../../Components').PropertyDetails;

const params = {
  item: {
    title: "Title",
    price_formatted: "Price",
    summary: "This is a summary mate",
    img_url: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/2a/The_Lord_of_The_Rings_-_Gandalf_The_Grey.png/revision/latest/scale-to-width-down/300?cb=20160321085616"
  }
}

const PropertyDetailsTest = createReactClass({
  render: function() {
    return(
      <PropertyDetails
        params = {params}
      />
    )
  }
})

module.exports = PropertyDetailsTest
