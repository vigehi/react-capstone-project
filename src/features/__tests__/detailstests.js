/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Home from '../home';
import store from '../../app/store';

describe('Test specific post', () => {
  it('renders correctly', () => {
    const post = [
      {
        id: 2424923,
        info: 'Zombie startups',
      },
    ];

    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const message = screen.getByText('Enter a valid post!');
    expect(message).toMatchSnapshot();
  });
});
