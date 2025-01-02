import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export class FullNameValidator {
  static isValid(): ValidatorFn {
    return (control: AbstractControl): Validators | null => {
      const name = control.value;
      const re = /^([A-zÀ-ú]{3,})+\s+([A-zÀ-ú\s]{2,})+$/i;

      if (name && !re.test(name)) {
        return { format: true };
      }

      return null;
    };
  }
}
