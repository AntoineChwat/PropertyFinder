'use strict';

const connect = require('react-redux').connect;

const NavigationActions = require('react-navigation').NavigationActions;

const actions = require('./actions');
const startLoading = actions.startLoading;
const returnResult = actions.returnResult;
const updateSearchString = actions.updateSearchString;
const returnError = actions.returnError;

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
  return (
    Object.assign({}, state, {
      result: Object.assign({}, state.result)
    })
  )
}

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
      const query = urlForQueryAndPage('place_name', searchString, 1);
      this.startSearch();
      fetch(query)
        .then(response => response.json())
        .then(json => {
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
