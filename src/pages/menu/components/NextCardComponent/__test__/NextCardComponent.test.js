import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NextCardComponent from '../NextCardComponent';

Enzyme.configure({ adapter: new Adapter() });

const checkOrderFinalisation = jest.fn();
const nextCardComponent = (<NextCardComponent checkOrderFinalisation={checkOrderFinalisation} />);

describe('The appearance and functionality of the NextCardComponent', () => {
  const container = mount(<NextCardComponent checkOrderFinalisation={checkOrderFinalisation} />);
  it('Matches the previous snapshot', () => {
    const tree = renderer.create(nextCardComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly', () => {
    mount(<NextCardComponent checkOrderFinalisation={checkOrderFinalisation} />);
  });

  it('Has the correct structure', () => {
    expect(container.childAt(0).hasClass('nextCardContainer')).toBe(true);
    expect(container.childAt(0).children()).toHaveLength(2);
    expect(container.childAt(0).childAt(0).name()).toBe('button');
    expect(container.childAt(0).childAt(1).name()).toBe('button');
  });

  it('Triggers the order check when the next button is clicked', () => {
    container.find('.nextButton').simulate('click');
    expect(checkOrderFinalisation).toHaveBeenCalledTimes(1);
  });
});
