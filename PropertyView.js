'use strict';

const React = require('react');

const createReactClass = require('create-react-class');

const PropertyDetails = require('./Components').PropertyDetails;

const PropertyView = createReactClass({
  render: function() {
    const params = this.props.search.item;
    return (
      <PropertyDetails
        params = {params}
      />
    );
  }
})
PropertyView.navigationOptions = {
  title: 'Property'
};

module.exports = PropertyView;
