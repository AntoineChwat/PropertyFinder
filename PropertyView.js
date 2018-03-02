'use strict';

const React = require('react');

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const PropertyDetails = require('./Components').PropertyDetails;

const PropertyView = createReactClass({
  propTypes: {
    search: PropTypes.shape({
      item: PropTypes.object.isRequired
    })
  },
  render: function() {
    const params = this.props.search.item;
    return (
      <PropertyDetails
        params = {params}
      />
    );
  }
});
PropertyView.navigationOptions = {
  title: 'Property'
};

module.exports = PropertyView;
