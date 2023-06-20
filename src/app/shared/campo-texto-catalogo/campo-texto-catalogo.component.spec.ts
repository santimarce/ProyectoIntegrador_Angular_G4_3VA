import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoTextoCatalogoComponent } from './campo-texto-catalogo.component';

describe('CampoTextoCatalogoComponent', () => {
  let component: CampoTextoCatalogoComponent;
  let fixture: ComponentFixture<CampoTextoCatalogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoTextoCatalogoComponent]
    });
    fixture = TestBed.createComponent(CampoTextoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
