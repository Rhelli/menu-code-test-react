import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WelcomeDescriptionComponent from '../WelcomeDescriptionComponent';

Enzyme.configure({ adapter: new Adapter() });

const welcomeDescriptionComponent = (
  <WelcomeDescriptionComponent />
);

describe('The appearance and functionality of the WelcomeDescriptionComponent', () => {
  const component = mount(<WelcomeDescriptionComponent />);
  it('Matches the previous snapshot of the WelcomeDescriptionComponent', () => {
    const tree = renderer.create(welcomeDescriptionComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has the correct master container with the correct default class', () => {
    expect(component.childAt(0).hasClass('description')).toBe(true);
    expect(component.childAt(0).type()).toBe('div');
  });

  it('Contains the read more button', () => {
    expect(component.childAt(0).childAt(1).name()).toBe('button');
  });

  it('Displays the description content', () => {
    expect(component.childAt(0).childAt(0).name()).toBe('p');
  });
});
