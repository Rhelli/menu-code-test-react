import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WaiterCardComponent from '../WaiterCardComponent';

Enzyme.configure({ adapter: new Adapter() });

const messageList = [
  'Hello',
  'My Name Is Pierre',
  'I am your waiter'
];

describe('The appearance and functionality of the WaiterCardComponent', () => {
  const container = mount(<WaiterCardComponent messageList={messageList} />);

  it('Renders correctly', () => {
    mount(<WaiterCardComponent messageList={messageList} />);
  });

  it('Displays the messages passed via props', () => {
    expect(container.find('.waiterCardContainer').childAt(0).text()).toBe('Hello');
  });
});
