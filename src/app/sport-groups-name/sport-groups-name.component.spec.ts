import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportGroupsNameComponent } from './sport-groups-name.component';

describe('SportGroupsNameComponent', () => {
  let component: SportGroupsNameComponent;
  let fixture: ComponentFixture<SportGroupsNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportGroupsNameComponent]
    });
    fixture = TestBed.createComponent(SportGroupsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
