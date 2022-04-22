import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEstadoComponent } from './model-estado.component';

describe('ModelEstadoComponent', () => {
  let component: ModelEstadoComponent;
  let fixture: ComponentFixture<ModelEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
