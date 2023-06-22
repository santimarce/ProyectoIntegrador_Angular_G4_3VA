import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudhorarioComponent } from './crudhorario.component';

describe('CrudhorarioComponent', () => {
  let component: CrudhorarioComponent;
  let fixture: ComponentFixture<CrudhorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudhorarioComponent]
    });
    fixture = TestBed.createComponent(CrudhorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
