import { TestBed } from '@angular/core/testing';

import { CustomernumberValidatorService } from './customernumber-validator.service';

describe('CustomernumberValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomernumberValidatorService = TestBed.get(CustomernumberValidatorService);
    expect(service).toBeTruthy();
  });
});
