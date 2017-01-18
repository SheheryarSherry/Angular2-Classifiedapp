/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostingService } from './posting.service';

describe('PostingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostingService]
    });
  });

  it('should ...', inject([PostingService], (service: PostingService) => {
    expect(service).toBeTruthy();
  }));
});
