/**
 * @fileoverview  This is the property details container
 *
 * @author        Antoine Chwat
 *
 * @namespace     PropertyDetailsContainer
 */
'use strict';

const connect = require('react-redux').connect;

const PropertyDetails = require('../components/PropertyDetails');

/**
 * This function maps the useful part of our application's state to PropertyDetails' props
 *
 * @param    {Object} state the state of our application
 *
 * @returns  {Object} The item that needs to be rendered
 *
 * @memberof PropertyDetailsContainer
 */
const mapStateToProps = function(state) {
  return {
    item: state.search.item
  };
};

const PropertyDetailsContainer = connect(mapStateToProps)(PropertyDetails);

module.exports = PropertyDetailsContainer;
