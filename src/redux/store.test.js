import { createStore } from 'redux';
import rootReducer from './reducers';
import initialState from './reducers/initialState';
import * as courseActions from './actions/courseActions';

it('should update the store', () => {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: 'Clean Code'
  };

  // act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  //assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});

it('should load courses into the store', () => {
  // arrange
  const store = createStore(rootReducer, initialState);

  const courses = [
    {
      title: 'Clean Code'
    },
    {
      title: 'Clean Code2'
    }
  ];
  // act
  const action = courseActions.loadCourseSuccess(courses);
  store.dispatch(action);

  //assert
  const createdCourses = store.getState().courses;
  expect(createdCourses.length).toEqual(2);
});
