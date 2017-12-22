import { TestBed, inject } from '@angular/core/testing';

import { FootertextService } from './footertext.service';

describe('FootertextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootertextService]
    });
  });

  it('should be created', inject([FootertextService], (service: FootertextService) => {
    expect(service).toBeTruthy();
  }));
});
