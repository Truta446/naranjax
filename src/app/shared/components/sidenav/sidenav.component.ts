import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { Subject, takeUntil } from 'rxjs';
import { StateManagementService } from '../../services/utils/state-management.service';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterLink,
    TranslateModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  public isCollapsed: boolean = false;
  private destroy$ = new Subject<void>();
  private fb: FormBuilder = inject(FormBuilder);
  private translate: TranslateService = inject(TranslateService);
  public $stateManagement: StateManagementService = inject(StateManagementService);
  public langForm = this.fb.group({
    lang: this.fb.control<string>('es'),
  });

  public effectSig = effect(() => {
    this.isCollapsed = this.$stateManagement.isCollapsed();
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
