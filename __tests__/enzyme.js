import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16;'
import toJson from 'enzyme-to-json';

import Book from '../MockFrontEnd/component/Book.jsx'
import LeftContainer from '../MockFrontEnd/containers/LeftContainer.jsx'
import App from '../MockFrontEnd/App.jsx'
import { isTime } from 'neo4j-driver';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Book', () => {
    let wrapper;
    const props = {
      title: "hello",
      author: "world",
      numberOfPages: 4,
      publisher: "codesmith",
      bookId: 493
    };
    beforeAll(() => {
        wrapper = shallow(<Book {...props} />);
    });
    it('Renders a <li> for each prop', () => {
        expect(wrapper.type()).toEqual('li');
        expect(wrapper.text()).toEqual('hello')
    })
  })
})