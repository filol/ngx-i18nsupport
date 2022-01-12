import { TestBed, inject } from '@angular/core/testing.js';

import { DownloaderService } from './downloader.service';

describe('DownloaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloaderService]
    });
  });

  it('should ...', inject([DownloaderService], (service: DownloaderService) => {
    expect(service).toBeTruthy();
  }));
});
