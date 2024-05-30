import { TestBed } from '@angular/core/testing';

import { ShareBtwModuleService } from './share-btw-module.service';

describe('ShareBtwModuleService', () => {
  let service: ShareBtwModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareBtwModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
