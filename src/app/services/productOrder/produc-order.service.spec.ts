import { TestBed } from '@angular/core/testing';

import { ProducOrderService } from './produc-order.service';

describe('ProducOrderService', () => {
  let service: ProducOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
