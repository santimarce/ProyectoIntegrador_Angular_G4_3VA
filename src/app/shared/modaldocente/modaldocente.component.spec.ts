import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldocenteComponent } from './modaldocente.component';

describe('ModaldocenteComponent', () => {
  let component: ModaldocenteComponent;
  let fixture: ComponentFixture<ModaldocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModaldocenteComponent]
    });
    fixture = TestBed.createComponent(ModaldocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
