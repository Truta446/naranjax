import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class CpfValidator {
  /**
   * Valida se o CPF é valido. Pode-se informar o CPF com ou sem máscara.
   */
  static isValid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let cpf = control.value;

      if (cpf) {
        // Remover caracteres especiais (pontos e traço)
        cpf = cpf.replace(/\./g, '').replace(/-/g, '');

        let numbers, digits, sum, i, result, equalDigits;
        equalDigits = 1;

        if (cpf.length !== 11) {
          return { cpfNotValid: true };
        }

        for (i = 0; i < cpf.length - 1; i++) {
          if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
            equalDigits = 0;
            break;
          }
        }

        if (!equalDigits) {
          numbers = cpf.substring(0, 9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--) {
            sum += parseInt(numbers.charAt(10 - i)) * i;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== parseInt(digits.charAt(0))) {
            return { cpfNotValid: true };
          }
          numbers = cpf.substring(0, 10);
          sum = 0;

          for (i = 11; i > 1; i--) {
            sum += parseInt(numbers.charAt(11 - i)) * i;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== parseInt(digits.charAt(1))) {
            return { cpfNotValid: true };
          }
          return null;
        } else {
          return { cpfNotValid: true };
        }
      }

      return null;
    };
  }
}
