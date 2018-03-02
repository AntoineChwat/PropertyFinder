'use strict';

const connect = require('react-redux').connect;

const PropertyView = require('./PropertyView');

const mapStateToProps = function(state) {
  return (
    Object.assign({}, state, {
      result: Object.assign({}, state.result)
    })
  );
};

const mapDispatchToProps = function(dispatch) {
  return {
  };
};

const PropertyViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyView);

module.exports = PropertyViewContainer;
