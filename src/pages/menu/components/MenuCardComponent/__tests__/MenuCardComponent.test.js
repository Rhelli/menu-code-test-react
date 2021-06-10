import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MenuCardComponent from '../MenuCardComponent';

Enzyme.configure({ adapter: new Adapter() });

const submitOrderAddition = jest.fn(() => 'test');
const menuCardComponent = (<MenuCardComponent submitOrderAddition={submitOrderAddition} />);

describe('The appearance and functionality of the MenuCardComponent', () => {
  it('Matches the previous snapshot of the component', () => {
    const tree = renderer.create(menuCardComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
