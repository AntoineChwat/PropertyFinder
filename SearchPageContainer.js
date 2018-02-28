const connect = require('react-redux').connect;
const startLoading = require('./actions').startLoading;
const stopLoading = require('./actions').stopLoading;
const SearchPage = require('./SearchPage');

const initialState = {
  isLoading: false
};

const mapStateToProps = function(state = initialState) {
  return {
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    startSearch: function() {
      dispatch(startLoading());
    },
    stopSearch: function() {
      dispatch(stopLoading());
    }
  }
}

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)

module.exports = SearchPageContainer;
