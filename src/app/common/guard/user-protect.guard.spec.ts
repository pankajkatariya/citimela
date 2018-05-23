import { TestBed, async, inject } from '@angular/core/testing';

import { UserProtectGuard } from './user-protect.guard';

describe('UserProtectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProtectGuard]
    });
  });

  it('should ...', inject([UserProtectGuard], (guard: UserProtectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
