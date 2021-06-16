import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WelcomeFormComponent from '../WelcomeFormComponent';

Enzyme.configure({ adapter: new Adapter() });

const submitNewBooking = jest.fn(() => 'New Booking Submitted');
const welcomeFormComponent = (<WelcomeFormComponent submitNewBooking={submitNewBooking} />);

describe('The appearance and functionality of the WelcomeFormComponent', () => {
  const container = mount(<WelcomeFormComponent submitNewBooking={submitNewBooking} />);
  const form = container.find('.welcomeForm');

  it('Matches the previous snapshot', () => {
    const tree = renderer.create(welcomeFormComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    window.HTMLCanvasElement.prototype.getContext = () => {};
    mount(<WelcomeFormComponent submitNewBooking={submitNewBooking} />);
  });

  it('Should be contained by the master container with the correct attributes', () => {
    expect(container.childAt(0).name()).toBe('div');
    expect(container.childAt(0).hasClass('welcomeFormComponent')).toBe(true);
  });

  it('Contains the form element with the correct attributes', () => {
    expect(form.name()).toBe('form');
  });

  it('Submits the form with the correct function when the form is submitted inline', () => {
    form.simulate('submit');
    expect(submitNewBooking).toHaveBeenCalledTimes(1);
  });

  it('Contains inputs for party size, a date and a time', () => {
    expect(container.find('.partySize').childAt(1).name()).toBe('select');
    expect(container.find('.timeDate').childAt(0).childAt(1).name()).toBe('DatePicker');
    expect(container.find('.timeDate').childAt(1).childAt(1).name()).toBe('select');
  });
});
