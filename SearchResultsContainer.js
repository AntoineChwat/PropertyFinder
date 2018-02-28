const connect = require('react-redux').connect;

const actions = require('./actions');
const SearchResults = require('./SearchResults');

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

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)

module.exports = SearchResultsContainer;
