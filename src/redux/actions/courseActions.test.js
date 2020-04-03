import * as courseActions from './courseActions';
import * as types from './actionTypes';
import courses from '../../../tools/mockData';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async course action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates BEGIN_API_CALL & LOAD_COURSES_SUCCESS when fetching todos has been done', () => {
    fetchMock.mock('*', {
      body: courses,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.BEGIN_API_CALL },
      { type: types.LOAD_COURSES_SUCCESS, courses }
    ];
    const store = mockStore({ courses: [] });

    return store.dispatch(courseActions.loadCourses()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('sync course success', () => {
  it('should create a CREATE_COURSE_SUCCESS action', () => {
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS
    };
    const action = courseActions.createCourseSuccess(course);
    expect(action).toEqual(expectedAction);
  });
});
