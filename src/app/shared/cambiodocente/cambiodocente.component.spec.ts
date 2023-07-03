import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiodocenteComponent } from './cambiodocente.component';

describe('CambiodocenteComponent', () => {
  let component: CambiodocenteComponent;
  let fixture: ComponentFixture<CambiodocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiodocenteComponent]
    });
    fixture = TestBed.createComponent(CambiodocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
