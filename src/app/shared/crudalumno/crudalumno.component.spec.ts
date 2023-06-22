import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudalumnoComponent } from './crudalumno.component';

describe('CrudalumnoComponent', () => {
  let component: CrudalumnoComponent;
  let fixture: ComponentFixture<CrudalumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudalumnoComponent]
    });
    fixture = TestBed.createComponent(CrudalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
