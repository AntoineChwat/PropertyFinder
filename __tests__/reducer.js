import 'react-native';

import reducer from '../Reducers/searchReducer';
describe('searchReducer', () => {
  it('should return initial state', () => {
    const expectedReducer = {
      isLoading: false,
      result: {},
      message: '',
      searchString: 'London',
      item: {}
    };
    expect(
      reducer(undefined, {})
    ).toMatchObject(expectedReducer);
  });
  it('should handle START_LOADING', () => {
    const expectedReducer = {
      isLoading: true,
      result: {},
      message: '',
      searchString: 'London',
      item: {}
    };
    expect(
      reducer(
        undefined, {
          type: 'START_LOADING'
        }
      )
    ).toMatchObject(expectedReducer);
  });
  it('should handle RETURN_RESULT', () => {
    const expectedReducer = {
      isLoading: false,
      result: {
        test: 'Test result'
      },
      message: '',
      searchString: 'London',
      item: {}
    };
    expect(
      reducer(
        undefined, {
          type: 'RETURN_RESULT',
          result: expectedReducer.result
        }
      )
    ).toMatchObject(expectedReducer);
  });
  it('should handle UPDATE_SEARCH_STRING', () => {
    const expectedReducer = {
      isLoading: false,
      result: {},
      message: '',
      searchString: 'Test search string',
      item: {}
    };
    expect(
      reducer(
        undefined, {
          type: 'UPDATE_SEARCH_STRING',
          searchString: expectedReducer.searchString
        }
      )
    ).toMatchObject(expectedReducer);
  });
  it('should handle RETURN_ERROR', () => {
    const expectedReducer = {
      isLoading: false,
      result: {},
      message: 'Test message',
      searchString: 'London',
      item: {}
    };
    expect(
      reducer(
        undefined, {
          type: 'RETURN_ERROR',
          message: expectedReducer.message
        }
      )
    ).toMatchObject(expectedReducer);
  });
  it('should handle RETURN_ITEM', () => {
    const expectedReducer = {
      isLoading: false,
      result: {},
      message: '',
      searchString: 'London',
      item: {
        test: 'Test item'
      }
    };
    expect(
      reducer(
        undefined, {
          type: 'RETURN_ITEM',
          item: expectedReducer.item
        }
      )
    ).toMatchObject(expectedReducer);
  });
});
