import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagesfoundComponent } from './nopagesfound.component';

describe('NopagesfoundComponent', () => {
  let component: NopagesfoundComponent;
  let fixture: ComponentFixture<NopagesfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NopagesfoundComponent]
    });
    fixture = TestBed.createComponent(NopagesfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
