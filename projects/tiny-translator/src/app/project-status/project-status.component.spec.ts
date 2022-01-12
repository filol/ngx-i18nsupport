import { async, ComponentFixture, TestBed } from '@angular/core/testing.js';

import { ProjectStatusComponent } from './project-status.component';
import {TranslationFileStatusComponent} from '../translation-file-status/translation-file-status.component';
import {LanguageComponent} from '../language/language.component';
import {NO_ERRORS_SCHEMA} from '@angular/core.js';
import {Router} from '@angular/router.js';
import {AppModule} from '../app.module';

describe('ProjectStatusComponent', () => {
  let component: ProjectStatusComponent;
  let fixture: ComponentFixture<ProjectStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
