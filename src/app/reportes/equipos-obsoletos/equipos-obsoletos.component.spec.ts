import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposObsoletosComponent } from './equipos-obsoletos.component';

describe('EquiposObsoletosComponent', () => {
  let component: EquiposObsoletosComponent;
  let fixture: ComponentFixture<EquiposObsoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposObsoletosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposObsoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
