const connect = require('react-redux').connect;

import { NavigationActions } from 'react-navigation'

const actions = require('./actions');
const startLoading = actions.startLoading;
const stopLoading = actions.stopLoading;
const returnResult = actions.returnResult;
const updateMessage = actions.updateMessage;
const updateSearchString = actions.updateSearchString;
const returnedError = actions.returnedError;
const updateNavState = actions.updateNavState;

const SearchPage = require('./SearchPage');

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'https://api.nestoria.co.uk/api?' + querystring;
}

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
      this.stopSearch();
      dispatch(returnResult(result));
    },
    modifyMessage: function(message) {
      dispatch(updateMessage(message));
    },
    modifySearchString: function(searchString) {
      dispatch(updateSearchString(searchString));
    },
    gotError: function(error) {
      dispatch(stopLoading());
      dispatch(returnedError());
      dispatch(updateMessage('An error occured: ' + error));
      this.modifySearchString("Idiot");
    },
    onSearchPressed: function(searchString) {
      const query = urlForQueryAndPage('place_name', searchString, 1);
      this.startSearch();
      fetch(query)
        .then(response => response.json())
        .then(json => {
          this.sendResult(json.response)
          if (json.response.application_response_code.substr(0, 1) !== '1') {
            throw "This location does not exist madafucka!"
          } else {
            this.sendResult(json.response)
            dispatch(NavigationActions.navigate({ routeName: 'Results' }))
          }
        })
        .catch(error => {
          this.gotError(error);
        });
    }
  }
}

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)

module.exports = SearchPageContainer;
