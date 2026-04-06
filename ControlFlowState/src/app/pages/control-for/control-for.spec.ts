import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFor } from './control-for';

describe('ControlFor', () => {
  let component: ControlFor;
  let fixture: ComponentFixture<ControlFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
