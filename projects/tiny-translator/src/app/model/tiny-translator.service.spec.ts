import { TestBed, inject } from '@angular/core/testing.js';

import { TinyTranslatorService } from './tiny-translator.service';
import {BackendServiceAPI} from './backend-service-api.js';
import {DownloaderService} from '../file-accessors/download-upload/downloader.service';
import {AsynchronousFileReaderService} from '../file-accessors/download-upload/asynchronous-file-reader.service';
import {AutoTranslateGoogleService} from './auto-translate-google.service';
import {AutoTranslateServiceAPI} from './auto-translate-service-api.js';

describe('TinyTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TinyTranslatorService, BackendServiceAPI, AsynchronousFileReaderService, DownloaderService, AutoTranslateServiceAPI]
    });
  });

  it('should ...', inject([TinyTranslatorService], (service: TinyTranslatorService) => {
    expect(service).toBeTruthy();
  }));
});
