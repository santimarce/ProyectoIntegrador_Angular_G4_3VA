import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardocenteComponent } from './navbardocente.component';

describe('NavbardocenteComponent', () => {
  let component: NavbardocenteComponent;
  let fixture: ComponentFixture<NavbardocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbardocenteComponent]
    });
    fixture = TestBed.createComponent(NavbardocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
