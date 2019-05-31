import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../home';
configure({ adapter: new Adapter() });


/* eslint-disable no-undef */
const sum = (a, b) => a + b;

describe('Home page', () => {
  it('sum', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

const defaultProps = {
  courses: [],
  authors: [],
  history:{},
  loading: false,
  fetchData: jest.fn(),
  editCourse: jest.fn(),
  deleteCourse: jest.fn(),
  addCourse: jest.fn(),
  renderAuthorName: jest.fn(),
};


const setup = properties => {
  const props = { ...defaultProps, ...properties };

  const Wrapper = shallow(<Home {...props} />);
  return {
    props,
    Wrapper,
  };
};

describe('test home page', () => {
  it('check loading Available', () => {
    const { Wrapper } = setup();
    const loading = Wrapper.find('h1');
    expect(loading.exists()).toBe(true);

    const newProps = { ...defaultProps, loading: true };
    const { Wrapper: Wrapper1 } = setup(newProps);
    const loading1 = Wrapper1.find('h1');
    expect(loading1.text()).toEqual('Loading...');
  });
});