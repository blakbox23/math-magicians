import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Quote', () => {
  test('test if it displays William Paul Thurston', () => {
    render(<Quote />);
    expect(screen.getByTestId('mathquote')).toHaveTextContent('Mathematics');
  });
});

test('Get a snapshot of Quote component', () => {
  const component = renderer
    .create(<Quote />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
