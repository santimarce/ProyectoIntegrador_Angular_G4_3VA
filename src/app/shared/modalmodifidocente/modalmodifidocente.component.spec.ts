import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmodifidocenteComponent } from './modalmodifidocente.component';

describe('ModalmodifidocenteComponent', () => {
  let component: ModalmodifidocenteComponent;
  let fixture: ComponentFixture<ModalmodifidocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalmodifidocenteComponent]
    });
    fixture = TestBed.createComponent(ModalmodifidocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
