import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaComponent } from './liga';

describe('Liga', () => {
  let component: LigaComponent;
  let fixture: ComponentFixture<LigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
