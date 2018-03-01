export const startLoading = function() {
  return {
    type: "START_LOADING"
  }
}

export const stopLoading = function() {
  return {
    type: "STOP_LOADING"
  }
}

export const returnResult = function(result) {
  return {
    type: "RETURN_RESULT",
    result
  }
}

export const updateMessage = function(message) {
  return {
    type: "UPDATE_MESSAGE",
    message
  }
}

export const updateSearchString = function(searchString) {
  return {
    type: "UPDATE_SEARCH_STRING",
    searchString
  }
}

export const returnedError = function() {
  return {
    type: "RETURNED_ERROR"
  }
}

export const updateNavState = function (response) {
  return {
    type: "UPDATE_NAV_STATE",
    response
  }
}
