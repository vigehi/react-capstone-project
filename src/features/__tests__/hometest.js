/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Home from '../home';
import store from '../../app/store';

describe('Test the post', () => {
  it('renders correctly', () => {
    const post = [
      {
        post: 'Tata Power, a top power producer in India, confirms cyberattack',
        info: '<p>Tata Power, a leading power generation company in India, has confirmed it was hit by a cyberattack. In a brief statement released on Friday, the Mumbai-based company said that the attack impacted some of its I.T. systems. &#8220;The company has taken steps to retrieve and restore the systems. All critical operational systems are functioning; however, [&hellip;]</p>',
      },
    ];

    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const message = screen.getByText('Enter a post');
    expect(message).toMatchSnapshot();
  });
});
