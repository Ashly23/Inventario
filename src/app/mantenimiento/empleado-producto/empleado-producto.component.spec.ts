import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoProductoComponent } from './empleado-producto.component';

describe('EmpleadoProductoComponent', () => {
  let component: EmpleadoProductoComponent;
  let fixture: ComponentFixture<EmpleadoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
