const startLoading = function() {
  return {
    type: "START_LOADING"
  }
}

const returnResult = function(result) {
  return {
    type: "RETURN_RESULT",
    result
  }
}

const updateSearchString = function(searchString) {
  return {
    type: "UPDATE_SEARCH_STRING",
    searchString
  }
}

const returnError = function(message) {
  return {
    type: "RETURN_ERROR",
    message: message
  }
}

const returnItem = function(item) {
  return {
    type: "RETURN_ITEM",
    item
  }
}

module.exports = {
  startLoading,
  returnResult,
  updateSearchString,
  returnError,
  returnItem
}
