import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposDepartComponent } from './equipos-depart.component';

describe('EquiposDepartComponent', () => {
  let component: EquiposDepartComponent;
  let fixture: ComponentFixture<EquiposDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
