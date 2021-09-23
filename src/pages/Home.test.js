import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
  test('renders Home component with first paragraph', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('firstPar')).toHaveTextContent('Donec quam');
  });
  test('renders Home component with first paragraph', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('secondPar')).toHaveTextContent('Nulla consequat');
  });
});

describe('Home snapshot', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
