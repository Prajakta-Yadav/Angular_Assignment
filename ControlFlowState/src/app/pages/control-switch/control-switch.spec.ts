import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSwitch } from './control-switch';

describe('ControlSwitch', () => {
  let component: ControlSwitch;
  let fixture: ComponentFixture<ControlSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
