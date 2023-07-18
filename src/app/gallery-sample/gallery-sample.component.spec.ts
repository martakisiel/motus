import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySampleComponent } from './gallery-sample.component';

describe('GallerySampleComponent', () => {
  let component: GallerySampleComponent;
  let fixture: ComponentFixture<GallerySampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerySampleComponent]
    });
    fixture = TestBed.createComponent(GallerySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
