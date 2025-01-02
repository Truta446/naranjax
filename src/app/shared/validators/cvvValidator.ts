import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cvvValidate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cvvValue = control?.value;

    if (typeof cvvValue !== 'string') {
      return { expirationDateNotValid: true };
    }

    const cvv = parseInt(cvvValue);

    if (isNaN(cvv) || cvv <= 0) {
      return { expirationDateNotValid: true };
    }

    return null;
  };
}
