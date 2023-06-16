import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruddocentesComponent } from './cruddocentes.component';

describe('CruddocentesComponent', () => {
  let component: CruddocentesComponent;
  let fixture: ComponentFixture<CruddocentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CruddocentesComponent]
    });
    fixture = TestBed.createComponent(CruddocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
