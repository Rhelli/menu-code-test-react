import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WelcomeNameEntryComponent from '../WelcomeNameEntryComponent';

Enzyme.configure({ adapter: new Adapter() });

const submitNewOrders = jest.fn(() => 'New order submitted');
const welcomeNameEntryComponent = (<WelcomeNameEntryComponent submitNewOrders={submitNewOrders} />);

describe('The appearance and functionality of the WelcomeNameEntryComponent', () => {
  const container = mount(<WelcomeNameEntryComponent submitNewOrders={submitNewOrders} />);
  it('Matches the previous snapshot', () => {
    const tree = renderer.create(welcomeNameEntryComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly', () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    mount(<WelcomeNameEntryComponent submitNewOrders={submitNewOrders} />);
  });

  it('Contains the form element with the correct attributes', () => {
    expect(container.find('.nameEntryForm').name()).toBe('form');
  });

  it('Contains two entry points for names', () => {
    expect(container.find('#guest1')).toBeTruthy();
    expect(container.find('#guest2')).toBeTruthy();
  });
});
