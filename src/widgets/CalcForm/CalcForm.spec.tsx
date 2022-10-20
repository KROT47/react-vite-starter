import {
  findByDisplayValue,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { assertIsHTMLInputElement } from '@/test/utils';

import { CalcForm } from './CalcForm';

describe('CalcForm', () => {
  it('should renders a msg', async () => {
    render(<CalcForm />);

    const title = screen.getByTestId('calc-form-input');
    assertIsHTMLInputElement(title);

    expect(title).toHaveValue('');

    fireEvent.change(title, { target: { value: '1' } });
    // fireEvent.keyUp(title, {key: '1', code: 'Digit1', charCode: 49});
    const x = await waitFor(() => screen.findByDisplayValue('1'));
    // expect(title.value).toBe('$1.00');
    expect(x).toBeInTheDocument();
  });
});
