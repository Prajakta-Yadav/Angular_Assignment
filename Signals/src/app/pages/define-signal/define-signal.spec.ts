import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineSignal } from './define-signal';

describe('DefineSignal', () => {
  let component: DefineSignal;
  let fixture: ComponentFixture<DefineSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefineSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
