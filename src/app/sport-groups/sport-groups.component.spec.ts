import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportGroupsComponent } from './sport-groups.component';

describe('SportGroupsComponent', () => {
  let component: SportGroupsComponent;
  let fixture: ComponentFixture<SportGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportGroupsComponent]
    });
    fixture = TestBed.createComponent(SportGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
