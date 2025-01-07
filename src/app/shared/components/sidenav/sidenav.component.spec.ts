import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule, provideNzIcons } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { By } from '@angular/platform-browser';
import { StateManagementService } from '../../services/utils/state-management.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { icons } from '../../../icons-provider';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let translateService: TranslateService;
  let stateManagementService: jasmine.SpyObj<StateManagementService>;

  beforeEach(waitForAsync(() => {
    const stateManagementSpy = jasmine.createSpyObj('StateManagementService', ['isCollapsed']);

    TestBed.configureTestingModule({
      imports: [
        SidenavComponent,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        NzFormModule,
        NzIconModule,
        NzMenuModule,
        NzSelectModule,
        NzLayoutModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: StateManagementService, useValue: stateManagementSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {},
              data: {},
            },
            params: of({}),
            queryParams: of({}),
          },
        },
        provideNzIcons(icons),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    stateManagementService = TestBed.inject(StateManagementService) as jasmine.SpyObj<StateManagementService>;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default language to Spanish', () => {
    spyOn(translateService, 'setDefaultLang');
    component.ngOnInit();
    expect(translateService.setDefaultLang).toHaveBeenCalledWith('es');
  });

  it('should change language on langForm value change', () => {
    spyOn(translateService, 'use');
    component.ngOnInit();
    component.langForm.controls.lang.setValue('en');
    expect(translateService.use).toHaveBeenCalledWith('en');
  });

  it('should call submitForm and log values when form is valid', () => {
    const consoleSpy = spyOn(console, 'log');
    component.langForm.controls.lang.setValue('pt');
    component.submitForm();
    expect(consoleSpy).toHaveBeenCalledWith('submit', { lang: 'pt' });
  });

  it('should render the menu with correct number of items', () => {
    fixture.detectChanges();
    const menuItems = fixture.debugElement.queryAll(By.css('li[nz-menu-item]'));
    expect(menuItems.length).toBe(4); // Atualize conforme o número de itens no seu menu
  });

  it('should render correct logo based on isCollapsed state', () => {
    component.isCollapsed = false;
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('.sidebar-logo img'));
    expect(img.nativeElement.src).toContain('155x36px_');

    component.isCollapsed = true;
    fixture.detectChanges();
    expect(img.nativeElement.src).toContain('assets/images/logo.png');
  });
});
