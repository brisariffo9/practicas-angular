import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maquillaje } from './maquillaje';

describe('Maquillaje', () => {
  let component: Maquillaje;
  let fixture: ComponentFixture<Maquillaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maquillaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maquillaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
