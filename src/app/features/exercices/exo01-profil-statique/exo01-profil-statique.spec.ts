import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo01ProfilStatique } from './exo01-profil-statique';

describe('Exo01ProfilStatique', () => {
  let component: Exo01ProfilStatique;
  let fixture: ComponentFixture<Exo01ProfilStatique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo01ProfilStatique],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo01ProfilStatique);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
