import { TestBed, inject } from '@angular/core/testing';

import { CommunityPostsDataService } from './community-posts-data.service';

describe('CommunityPostsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunityPostsDataService]
    });
  });

  it('should be created', inject([CommunityPostsDataService], (service: CommunityPostsDataService) => {
    expect(service).toBeTruthy();
  }));
});
