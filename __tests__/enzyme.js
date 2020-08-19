import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16;'
import toJson from 'enzyme-to-json';

import Book from '../MockFrontEnd/component/Book.jsx'
import LeftContainer from '../MockFrontEnd/containers/LeftContainer.jsx'
import App from '../MockFrontEnd/App.jsx'

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Book', () => {
    let wrapper;
    const props = {
      
    }
  })
})