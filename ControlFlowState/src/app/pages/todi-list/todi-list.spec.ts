import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodiList } from './todi-list';

describe('TodiList', () => {
  let component: TodiList;
  let fixture: ComponentFixture<TodiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodiList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodiList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
