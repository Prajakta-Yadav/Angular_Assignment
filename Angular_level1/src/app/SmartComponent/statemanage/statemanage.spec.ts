import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statemanage } from './statemanage';

describe('Statemanage', () => {
  let component: Statemanage;
  let fixture: ComponentFixture<Statemanage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statemanage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statemanage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
