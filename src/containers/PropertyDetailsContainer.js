'use strict';

const connect = require('react-redux').connect;

const PropertyDetails = require('../components/PropertyDetails');

const mapStateToProps = function(state) {
  return (
    Object.assign({}, state.search, {
      result: Object.assign({}, state.search.result)
    })
  );
};

const mapDispatchToProps = function(dispatch) {
  return {
  };
};

const PropertyDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyDetails);

module.exports = PropertyDetailsContainer;
