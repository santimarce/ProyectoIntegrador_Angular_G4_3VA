import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPagesFoundComponent } from './no-pages-found.component';

describe('NoPagesFoundComponent', () => {
  let component: NoPagesFoundComponent;
  let fixture: ComponentFixture<NoPagesFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPagesFoundComponent]
    });
    fixture = TestBed.createComponent(NoPagesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
