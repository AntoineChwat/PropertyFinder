const connect = require('react-redux').connect;

const actions = require('./actions');
const startLoading = actions.startLoading;
const stopLoading = actions.stopLoading;
const returnResult = actions.returnResult;
const updateMessage = actions.updateMessage;
const SearchPage = require('./SearchPage');

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
    startSearch: function() {
      dispatch(startLoading()),
      dispatch(updateMessage(''));
    },
    stopSearch: function() {
      dispatch(stopLoading());
    },
    sendResult: function(result) {
      dispatch(returnResult(result));
    },
    modifyMessage: function(message) {
      dispatch(updateMessage(message));
    }
    //add function to fetch here
  }
}

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)

module.exports = SearchPageContainer;
