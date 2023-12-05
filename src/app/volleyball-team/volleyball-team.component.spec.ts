import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolleyballTeamComponent } from './volleyball-team.component';

describe('VolleyballTeamComponent', () => {
  let component: VolleyballTeamComponent;
  let fixture: ComponentFixture<VolleyballTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolleyballTeamComponent]
    });
    fixture = TestBed.createComponent(VolleyballTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
