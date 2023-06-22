import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotongrillaComponent } from './botongrilla.component';

describe('BotongrillaComponent', () => {
  let component: BotongrillaComponent;
  let fixture: ComponentFixture<BotongrillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotongrillaComponent]
    });
    fixture = TestBed.createComponent(BotongrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
