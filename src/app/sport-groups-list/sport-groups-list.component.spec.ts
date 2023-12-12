import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportGroupsListComponent } from './sport-groups-list.component';

describe('SportGroupsListComponent', () => {
  let component: SportGroupsListComponent;
  let fixture: ComponentFixture<SportGroupsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportGroupsListComponent]
    });
    fixture = TestBed.createComponent(SportGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
