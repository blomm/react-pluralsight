import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it('tests that there are 3 links in the header', () => {
  const numLinks = shallow(<Header></Header>).find('NavLink').length;
  expect(numLinks).toEqual(3);
});

it('tests that there are 3 links in the header with mount', () => {
  const numLinks = mount(
    <MemoryRouter>
      <Header></Header>
    </MemoryRouter>
  ).find('a').length;
  expect(numLinks).toEqual(3);
});
