import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlIf } from './control-if';

describe('ControlIf', () => {
  let component: ControlIf;
  let fixture: ComponentFixture<ControlIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlIf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
