import { render, screen } from '@testing-library/react';
import App from './App';

import MockProvider from "./__test__/mockProvider";

test('renders learn react link', () => {
  render(<App />, { wrapper: MockProvider });

  expect(screen).toBeTruthy();
});
