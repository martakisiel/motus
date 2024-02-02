import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAppComponent } from './element-app.component';

describe('ElementAppComponent', () => {
  let component: ElementAppComponent;
  let fixture: ComponentFixture<ElementAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementAppComponent]
    });
    fixture = TestBed.createComponent(ElementAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
