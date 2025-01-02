import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { provideNgxMask } from 'ngx-mask';
import { AddLeadingZeroPipe } from '../../pipes/add-leading-zero.pipe';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
  imports: [CommonModule, NzCardModule, AddLeadingZeroPipe],
  providers: [provideNgxMask()],
})
export class CreditCardComponent implements OnInit {
  @Input() public name: string = '';
  @Input() public number: string = '';
  @Input() public expiry: string = '';
  @Input() public cvv: string = '';
  @Input() public brand: string = '';
  @Input() public showEdit: boolean = false;
  @Input() public index: any = '';

  public showEye: boolean = false;

  public brandImage: string = '';
  public cardBrands: any[] = [
    {
      brand: 'VISA',
      pattern: /^4/,
      pathImage: '/assets/icons/logo_visa.svg',
    },
    {
      brand: 'MASTERCARD',
      pattern: /^5[1-5]/,
      pathImage: '/assets/icons/logo_mastercard.svg',
    },
    {
      brand: 'AMERICAN EXPRESS',
      pattern: /^(34|37)/,
      pathImage: '/assets/icons/logo_amex.svg',
      cvvMask: '0000',
    },
    {
      brand: 'ELO',
      pattern: /^(4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363|650|651|655)/,
      pathImage: '/assets/icons/logo_elo.svg',
    },
  ];

  public ngOnInit(): void {
    this.setCardBrand();
  }

  public setCardBrand(): void {
    const cardNumber = this.number.replace(/\s/g, '');
    this.cardBrands.forEach((cardBrand) => {
      if (cardBrand.pattern.test(cardNumber) || cardBrand.brand === this.brand.toLocaleUpperCase()) {
        this.brandImage = cardBrand.pathImage;
      }
    });
  }

  public toggleEyeBtn(): void {
    this.showEye = !this.showEye;
  }
}
