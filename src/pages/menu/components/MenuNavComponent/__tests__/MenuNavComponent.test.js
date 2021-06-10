import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MenuNavComponent from '../MenuNavComponent';

Enzyme.configure({ adapter: new Adapter() });

const orders = {
  Sam: {
    color: {
      backgroundColor: '#d3445d'
    },
    starters: {},
    mains: {},
    desserts: {}
  },
  Frodo: {
    color: {
      backgroundColor: '#404040'
    },
    starters: {},
    mains: {},
    desserts: {}
  }
};
const setCurrentGuest = jest.fn();
const currentGuest = 'Sam';

const menuNavComponent = (
  <MenuNavComponent
  orders={orders}
  setCurrentGuest={setCurrentGuest}
  currentGuest={currentGuest}
  />
);

describe('The appearance and functionality of the MenuNavComponent', () => {
  const container = mount(
    <MenuNavComponent
    orders={orders}
    setCurrentGuest={setCurrentGuest}
    currentGuest={currentGuest}
    />
  );
  it('Matches the previous snapshot taken', () => {
    const tree = renderer.create(menuNavComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders Correctly', () => {
    mount(<MenuNavComponent orders={orders} setCurrentGuest={setCurrentGuest} currentGuest={currentGuest} />);
  });

  it('Contains the master container with the correct attributes', () => {
    expect(container.find('.menuNavContainer').type()).toBe('header');
  });

  it('Contains buttons for each user provided from the orders prop', () => {
    expect(container.find('.menuNavButtons').children()).toHaveLength(2);
    expect(container.find('.menuNavButtons').childAt(0).text()).toBe('Sam');
    expect(container.find('.menuNavButtons').childAt(1).text()).toBe('Frodo');
  });

  it('Automatically focuses the first guests button on startup and unfocuses the other', () => {
    expect(container.find('.menuNavButtons').childAt(0).hasClass('selected')).toBe(true);
    expect(container.find('.menuNavButtons').childAt(1).hasClass('unselected')).toBe(true);
  });

  it('Should update the currentGuest state when an unfocused button is clicked', () => {
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation((currentGuest) => [currentGuest, setCurrentGuest]);
    container.find('.menuNavButtons').childAt(1).simulate('click');
    expect(currentGuest).toBe('Sam');
  });

  it('Paints the button the color assigned to the guest on welcome', () => {
    expect(container.find('.menuNavButtons').childAt(0).prop('style')).toEqual({ backgroundColor: '#d3445d' });
  });
});
