'use strict';

const connect = require('react-redux').connect;

const actions = require('../actions/actions');
const startLoading = actions.startLoading;
const returnResult = actions.returnResult;
const updateSearchString = actions.updateSearchString;
const returnError = actions.returnError;
const getResult = actions.getResult;

const SearchPage = require('../components/SearchPage');

const mapStateToProps = function(state) {
  return (
    Object.assign({}, state.search, {
      result: Object.assign({}, state.result)
    })
  );
};

const mapDispatchToProps = function(dispatch) {
  return {
    startSearch: function() {
      dispatch(startLoading());
    },
    sendResult: function(result) {
      dispatch(returnResult(result));
    },
    modifySearchString: function(searchString) {
      dispatch(updateSearchString(searchString));
    },
    gotError: function(error) {
      dispatch(returnError('An error occured: ' + error));
    },
    onSearchPressed: function(searchString) {
      dispatch(getResult(searchString));
    }
  };
};

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

module.exports = SearchPageContainer;
