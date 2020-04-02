import React from 'react';
import { cleanup, render } from 'react-testing-library';
import CourseForm from './CourseForm';

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props}></CourseForm>);
}

it('should render Add Course as text', () => {
  const { getByText } = renderCourseForm();
  getByText('Add Course');
});

it('should render "Save" as text somewhere', () => {
  const { getByText } = renderCourseForm();
  getByText('Save');
});

it('should render "Saving..." as text somewhere', () => {
  const { getByText, debug } = renderCourseForm({ saving: true });
  //debug();
  getByText('Saving...');
});
