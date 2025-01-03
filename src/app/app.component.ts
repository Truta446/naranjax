import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Subject, takeUntil } from 'rxjs';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    TranslateModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isCollapsed = false;
  private destroy$ = new Subject<void>();
  private fb: FormBuilder = inject(FormBuilder);
  private translate: TranslateService = inject(TranslateService);
  public langForm = this.fb.group({
    lang: this.fb.control<string>('es'),
  });

  public ngOnInit(): void {
    this.translate.setDefaultLang('es');

    this.langForm.controls.lang.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (value) {
        this.genderChange(value);
      }
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public submitForm(): void {
    if (this.langForm.valid) {
      console.log('submit', this.langForm.value);
    } else {
      Object.values(this.langForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  public genderChange(lang: string): void {
    this.translate.use(lang);
  }
}
