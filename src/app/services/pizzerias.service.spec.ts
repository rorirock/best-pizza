import { TestBed } from '@angular/core/testing';

import { PizzeriasService } from './pizzerias.service';

describe('PizzeriasService', () => {
  let service: PizzeriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzeriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
