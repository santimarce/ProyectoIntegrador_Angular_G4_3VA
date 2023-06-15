import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarapidaComponent } from './vistarapida.component';

describe('VistarapidaComponent', () => {
  let component: VistarapidaComponent;
  let fixture: ComponentFixture<VistarapidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistarapidaComponent]
    });
    fixture = TestBed.createComponent(VistarapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
