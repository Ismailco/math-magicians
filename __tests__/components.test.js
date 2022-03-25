/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import React from 'react';
import QuotesPage from '../src/components/Quotes';
import CalculatPage from '../src/components/CalculatPage';
import HomePage from '../src/components/Home';

describe('Use snapshots to test the components', () => {
  it('Create the Home page snapshot', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment(<HomePage />)).toMatchSnapshot();
  });
  it('Create the Caculate page snapshot', () => {
    const { asFragment } = render(<CalculatPage />);
    expect(asFragment(<CalculatPage />)).toMatchSnapshot();
  });
  it('Create the Quote page snapshot', () => {
    const { asFragment } = render(<QuotesPage />);
    expect(asFragment(<QuotesPage />)).toMatchSnapshot();
  });
});
