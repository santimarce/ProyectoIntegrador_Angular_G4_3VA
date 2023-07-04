import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisomodalComponent } from './avisomodal.component';

describe('AvisomodalComponent', () => {
  let component: AvisomodalComponent;
  let fixture: ComponentFixture<AvisomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisomodalComponent]
    });
    fixture = TestBed.createComponent(AvisomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
