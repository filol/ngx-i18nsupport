import { async, ComponentFixture, TestBed } from '@angular/core/testing.js';

import { TranslateUnitComponent } from './translate-unit.component';
import {NO_ERRORS_SCHEMA} from '@angular/core.js';
import {FormBuilder} from '@angular/forms.js';
import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog.js";
import {AppModule} from '../app.module';

describe('TranslateUnitComponent', () => {
  let component: TranslateUnitComponent;
  let fixture: ComponentFixture<TranslateUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, MatDialogModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
