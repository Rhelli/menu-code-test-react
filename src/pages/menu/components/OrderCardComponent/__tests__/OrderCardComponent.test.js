import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import OrderCardComponent from '../OrderCardComponent';

Enzyme.configure({ adapter: new Adapter() });

const orders = {
  Sam: {
    color: {
      backgroundColor: '#d3445d'
    },
    starters: {
      food: 'Lambas Bread',
      price: '5.00'
    },
    mains: {
      food: 'Taters',
      price: '11.50'
    },
    desserts: {}
  },
  Frodo: {
    color: {
      backgroundColor: '#404040'
    },
    starters: {
      food: 'Lambas Bread',
      price: '5.00'
    },
    mains: {
      food: 'Second Breakfast',
      price: '13'
    },
    desserts: {}
  }
};
const submitOrderDeletion = jest.fn();
const orderCardComponent = (<OrderCardComponent orders={orders} submitOrderDeletion={submitOrderDeletion} />);

describe('The appearance and functionality of the OrderCardComponent', () => {
  const container = mount(<OrderCardComponent orders={orders} submitOrderDeletion={submitOrderDeletion} />);
  it('Matches the previous snapshot taken', () => {
    const tree = renderer.create(orderCardComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly', () => {
    mount(<OrderCardComponent orders={orders} submitOrderDeletion={submitOrderDeletion} />);
  });

  it("Renders the guests' individualised order lists", () => {
    expect(container.find('.orderList').children()).toHaveLength(2);
    expect(container.find('.orderList').childAt(0).childAt(0).text()).toBe('Sam');
    expect(container.find('.orderList').childAt(1).childAt(0).text()).toBe('Frodo');
  });

  it("Renders each guests' ordered food and formatted price to their own lists", () => {
    expect(container.find('.orderList').childAt(0).childAt(1).childAt(0)
      .text()).toBe('Lambas Bread');
    expect(container.find('.orderList').childAt(0).childAt(1).childAt(1)
      .text()).toBe('£5.00');
  });

  it('Displays a total for each users order', () => {
    expect(container.find('.orderList').childAt(1).childAt(3).text()).toBe("Frodo's total:£18.00");
  });

  it('Displays a grand total for the whole order', () => {
    expect(container.find('.grandTotalContainer').childAt(1).text()).toBe('£34.00');
  });
});
