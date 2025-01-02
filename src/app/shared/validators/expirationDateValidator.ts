import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import moment from 'moment';

export function expirationDateValidate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const expirationDate = control?.value;

    if (typeof expirationDate !== 'string' || expirationDate.length !== 5) {
      return { expirationDateNotValid: true };
    }

    const month = parseInt(expirationDate.slice(0, 2), 10);
    const year = parseInt(expirationDate.slice(3, 5), 10);

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
      return { expirationDateNotValid: true };
    }

    const currentDate = moment();
    const inputDate = moment(`${year}-${month}-01`, 'YY-MM-DD');

    if (inputDate.isBefore(currentDate, 'month')) {
      return { expirationDateNotValid: true };
    }

    return null;
  };
}
