import React from 'react';
import { mount } from 'enzyme';
import { authors, newCourse, courses } from '../../../tools/mockData';
import { ManageCoursePage } from './ManageCoursePage';

function render(args) {
  const defaultProps = {
    authors,
    courses,
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    saveCourse: jest.fn(),
    course: newCourse,
    history: {},
    match: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}

it('should give a warning if passed in empty form', () => {
  const wrapper = render();
  wrapper.find('form').simulate('submit');
  const error = wrapper.find('.alert').first();
  expect(error.text()).toEqual('Title is required.');
});
