import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidateCreditCard {
  static isValid(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const cardNumber: string = control.value;
      const cardPatterns: any = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})/,
        Mastercard: /^5[1-5][0-9]{14}/,
        Amex: /^3[47][0-9]{13}/,
        DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}/,
        AmericanExpress: /^3[47]\d{1,2}(| |-)\d{6}\1\d{6}$/,
      };

      if (!cardNumber) {
        return { required: true };
      }

      const sanitizedCardNumber = cardNumber.replace(/\D/g, '');

      let isValid = false;

      for (const cardType in cardPatterns) {
        if (sanitizedCardNumber.match(cardPatterns[cardType])) {
          isValid = true;
          break;
        }
      }

      return isValid ? null : { invalidCard: true };
    };
  }
}
