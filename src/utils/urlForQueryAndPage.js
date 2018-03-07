/**
 * @fileoverview  Function used to create urls based on a search term
 *
 * @author        Antoine Chwat
 *
 * @namespace     urlForQueryAndPage
 */
'use strict';


/**
 * Create the function
 *
 * @param    {string} key        type of parameter
 * @param    {string} value      value of parameter
 * @param    {number} pageNumber number of the page we want to display
 *
 * @returns  {string}            A fully formed url
 *
 * @memberof urlForQueryAndPage
 */
const urlForQueryAndPage = function(key, value, pageNumber) {
  const data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'https://api.nestoria.co.uk/api?' + querystring;
};

module.exports = urlForQueryAndPage;
