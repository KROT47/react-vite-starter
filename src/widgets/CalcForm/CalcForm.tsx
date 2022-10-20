import { Button } from 'primereact/button';
import {
  InputNumber,
  InputNumberValueChangeParams,
} from 'primereact/inputnumber';
import { useCallback, useState } from 'react';

import styles from './CalcForm.module.css';

export function CalcForm() {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = useCallback(
    (e: InputNumberValueChangeParams) => setValue(e.value),
    []
  );
  return (
    <div className={styles.root}>
      <InputNumber
        data-testid="calc-form-input"
        value={value}
        mode="currency"
        currency="USD"
        locale="en-US"
        onValueChange={handleChange}
      />
      <Button label="Submit" />
    </div>
  );
}
