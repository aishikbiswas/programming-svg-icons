import { TestBed } from '@angular/core/testing';

import { ProgrammingSvgIconsService } from './programming-svg-icons.service';

describe('ProgrammingSvgIconsService', () => {
  let service: ProgrammingSvgIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammingSvgIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
