import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONasComponent } from './o-nas.component';

describe('ONasComponent', () => {
  let component: ONasComponent;
  let fixture: ComponentFixture<ONasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ONasComponent]
    });
    fixture = TestBed.createComponent(ONasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
