import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNestedEventsComponent } from './home-nested-events.component';

describe('HomeNestedEventsComponent', () => {
  let component: HomeNestedEventsComponent;
  let fixture: ComponentFixture<HomeNestedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNestedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNestedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
