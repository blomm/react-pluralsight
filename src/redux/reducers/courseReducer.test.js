import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

// reducers should return the new state after applying the action to the previous state

it('should add a course when passed the CREATE_COURSE_SUCCESS', () => {
  const initialState = [{ title: 'A' }, { title: 'B' }];
  const newCourse = { title: 'C' };

  const action = actions.createCourseSuccess(newCourse);
  const newState = courseReducer(initialState, action);

  expect(newState.length).toBe(3);
  expect(newState[0].title).toBe('A');
  expect(newState[1].title).toBe('B');
  expect(newState[2].title).toBe('C');
});

it('should update the course when passed UPDATE_COURSE_SUCCESS', () => {
  const initialState = [
    { title: 'A', id: 1 },
    { title: 'B', id: 2 }
  ];
  const course = { id: 2, title: 'Q' };
  const action = actions.updateCourseSuccess(course);
  const newState = courseReducer(initialState, action);

  const updatedCourse = newState.find(c => c.id == course.id);
  const untouchedCourse = newState.find(c => c.id == 1);
  expect(updatedCourse.title).toBe('Q');
  expect(untouchedCourse.title).toBe('A');
  expect(newState.length).toBe(2);
});
