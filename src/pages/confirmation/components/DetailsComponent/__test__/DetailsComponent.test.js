import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DetailsComponent from '../DetailsComponent';

Enzyme.configure({ adapter: new Adapter() });

const orderStore = {
  booking: {
    partySize: 2,
    time: '12:00',
    date: '2021-06-10T13:16:00.983Z'
  },
  orders: {
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
  }
}

const detailsComponent = (<DetailsComponent orderStore={orderStore} />);

describe('The appearance and functionality of the DetailsComponent', () => {
  const container = mount(<DetailsComponent orderStore={orderStore} />);

  it('Matches the previous snapshot taken', () => {
    const tree = renderer.create(detailsComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly', () => {
    mount(<DetailsComponent orderStore={orderStore} />);
  });

  it('Displays the booking details correctly with a formatted date', () => {
    expect(container.find('.bookingDetails').childAt(0).childAt(1).text()).toBe('For 2');
    expect(container.find('.bookingDetails').childAt(1).childAt(1).text()).toBe('12:00');
    expect(container.find('.bookingDetails').childAt(2).childAt(1).text()).toBe('Thursday, 10th June');
  });
});
