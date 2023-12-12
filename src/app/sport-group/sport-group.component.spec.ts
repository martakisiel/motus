import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportGroupComponent } from './sport-group.component';

describe('SportGroupComponent', () => {
  let component: SportGroupComponent;
  let fixture: ComponentFixture<SportGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportGroupComponent]
    });
    fixture = TestBed.createComponent(SportGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
