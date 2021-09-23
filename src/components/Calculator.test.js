/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('It should get calculator snapshot', () => {
  test('renders snapshot', () => {
    const component = renderer.create(<Calculator />).toJSON();
    expect(component).toMatchSnapshot('Calculator');
  });
});

describe('Check the click event', () => {
  test('click event', () => {
    render(<Calculator />);
    expect(userEvent.click(screen.getByTestId('ac'))).toHaveBeenCalled;
  });
});

