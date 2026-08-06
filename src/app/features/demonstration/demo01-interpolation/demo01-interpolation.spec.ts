import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo01Interpolation } from './demo01-interpolation';

describe('Demo01Interpolation', () => {
  let component: Demo01Interpolation;
  let fixture: ComponentFixture<Demo01Interpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo01Interpolation],
    }).compileComponents();

    fixture = TestBed.createComponent(Demo01Interpolation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
