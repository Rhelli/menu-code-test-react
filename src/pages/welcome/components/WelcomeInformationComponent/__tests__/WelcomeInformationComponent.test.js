import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WelcomeInformationComponent from '../WelcomeInformationComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('The appearance and functionality of the WelcomeInformationComponent', () => {
  const container = mount(<WelcomeInformationComponent />);
  it('Renders the component', () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    mount(<WelcomeInformationComponent />);
  });

  it('Contains the master container with the correct attributes', () => {
    expect(container.childAt(0).name()).toBe('div');
    expect(container.childAt(0).hasClass('welcomeInformationContainer')).toBe(true);
  });

  it('Displays the ratings widget correctly', () => {
    expect(container.find('.ratings').childAt(0).name()).toBe('Ratings');
  });

  it('Displays the comments, price, cuisine and tags information', () => {
    expect(container.find('.comments')).toBeTruthy();
    expect(container.find('.price')).toBeTruthy();
    expect(container.find('.cuisine')).toBeTruthy();
    expect(container.find('.welcomeInformationTagsBar')).toBeTruthy();
  });
});
