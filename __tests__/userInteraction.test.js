/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../src/components/Calculator';

describe('Test calculator as user interaction', () => {
  it('Addes two numbers and output the result', () => {
    const { getByText } = render(<Calculator />);

    fireEvent.click(getByText(/1/));
    fireEvent.click(getByText(/\+$/));
    fireEvent.click(getByText(/3/));
    fireEvent.click(getByText(/=/));

    const res = document.querySelector('.input');
    expect(res.value).toEqual('4');
  });
  it('Addes two numbers and output the result', () => {
    const { getByText } = render(<Calculator />);

    fireEvent.click(getByText(/3/));
    fireEvent.click(getByText(/^-/));
    fireEvent.click(getByText(/2/));
    fireEvent.click(getByText(/=/));

    const res = document.querySelector('.input');
    expect(res.value).toEqual('1');
  });

  it('Addes two numbers and output the result', () => {
    const { getByText } = render(<Calculator />);

    fireEvent.click(getByText(/5/));
    fireEvent.click(getByText(/x/));
    fireEvent.click(getByText(/2/));
    fireEvent.click(getByText(/=/));

    const res = document.querySelector('.input');
    expect(res.value).toEqual('10');
  });
  it('Addes two numbers and output the result', () => {
    const { getByText } = render(<Calculator />);

    fireEvent.click(getByText(/8/));
    fireEvent.click(getByText(/÷/));
    fireEvent.click(getByText(/2/));
    fireEvent.click(getByText(/=/));

    const res = document.querySelector('.input');
    expect(res.value).toEqual('4');
  });
});
