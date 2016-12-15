/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpToolsService } from './http-tools.service';

describe('HttpToolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpToolsService]
    });
  });

  it('should ...', inject([HttpToolsService], (service: HttpToolsService) => {
    expect(service).toBeTruthy();
  }));
});
