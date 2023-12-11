import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterSwimmingTeamComponent } from './winter-swimming-team.component';

describe('WinterSwimmingTeamComponent', () => {
  let component: WinterSwimmingTeamComponent;
  let fixture: ComponentFixture<WinterSwimmingTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinterSwimmingTeamComponent]
    });
    fixture = TestBed.createComponent(WinterSwimmingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
