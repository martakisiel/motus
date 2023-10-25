import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjeComponent } from './sekcje.component';

describe('SekcjeComponent', () => {
  let component: SekcjeComponent;
  let fixture: ComponentFixture<SekcjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SekcjeComponent]
    });
    fixture = TestBed.createComponent(SekcjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
