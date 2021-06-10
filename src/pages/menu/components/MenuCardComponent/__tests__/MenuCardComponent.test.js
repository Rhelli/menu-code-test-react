import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MenuCardComponent from '../MenuCardComponent';

Enzyme.configure({ adapter: new Adapter() });

const submitOrderAddition = jest.fn(() => 'test');
const menuCardComponent = (<MenuCardComponent submitOrderAddition={submitOrderAddition} />);

describe('The appearance and functionality of the MenuCardComponent', () => {
  const container = mount(<MenuCardComponent submitOrderAddition={submitOrderAddition} />);
  it('Matches the previous snapshot of the component', () => {
    const tree = renderer.create(menuCardComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Maps and displays selectable starters taken from the menu data', () => {
    expect(container.find('.startersMenu').childAt(1).children()).toHaveLength(4);
    expect(container.find('.startersMenu').childAt(1).childAt(1).props('onClick')).toBeTruthy();
  });

  it('Displays the name and price of the starters it maps', () => {
    expect(container.find('.startersMenu').childAt(1).childAt(1).childAt(0).text()).toBe('Pâté');
    expect(container.find('.startersMenu').childAt(1).childAt(1).childAt(1).text()).toBe('£5.00');
  });

  it('Maps and displays selectable mains taken from the menu data', () => {
    expect(container.find('.mainsMenu').childAt(1).children()).toHaveLength(4);
    expect(container.find('.mainsMenu').childAt(1).childAt(1).props('onClick')).toBeTruthy();
  });

  it('Displays the name and the price of the mains it maps', () => {
    expect(container.find('.mainsMenu').childAt(1).childAt(1).childAt(0).text()).toBe('Meatballs');
    expect(container.find('.mainsMenu').childAt(1).childAt(1).childAt(1).text()).toBe('£11.50');
  });

  it('Maps and displays selectable desserts taken from the menu data', () => {
    expect(container.find('.dessertsMenu').childAt(1).children()).toHaveLength(4);
    expect(container.find('.dessertsMenu').childAt(1).childAt(1).props('onClick')).toBeTruthy();
  })
});