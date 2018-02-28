const connect = require('react-redux').connect;

const actions = require('./actions');
const PropertyView = require('./PropertyView');

const mapStateToProps = function(state) {
  return {
    ...state,
    result: {
      ...state.result
    }
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
  }
}

const PropertyViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyView)

module.exports = PropertyViewContainer;
