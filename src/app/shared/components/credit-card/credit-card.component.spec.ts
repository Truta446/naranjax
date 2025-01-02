import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreditCardComponent } from './credit-card.component';

describe('CreditCardComponent', () => {
  let component: CreditCardComponent;
  let fixture: ComponentFixture<CreditCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CreditCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreditCardComponent);
    component = fixture.componentInstance;
    component.number = '1111222233334444';
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct name', () => {
    component.name = 'Test Name';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.credit-card__name').textContent).toContain('Test Name');
  });

  it('should display correct number', () => {
    component.number = '1111 2222 3333 4444';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.credit-card__number').textContent.length).toBe(19);
  });

  it('should display correct expiry', () => {
    component.expiry = '12/25';
    component.number = '1111 2222 3333 4444';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.expiry-date').textContent).toContain('12/25');
  });
});
