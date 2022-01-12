import { async, ComponentFixture, TestBed } from '@angular/core/testing.js';

import { ProjectComponent } from './project.component';
import {TranslationFileStatusComponent} from '../translation-file-status/translation-file-status.component';
import {NO_ERRORS_SCHEMA} from '@angular/core.js';
import {DownloaderService} from '../file-accessors/download-upload/downloader.service';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent, TranslationFileStatusComponent ],
      providers: [DownloaderService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
