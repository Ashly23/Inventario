import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPartesComponent } from './modal-partes.component';

describe('ModalPartesComponent', () => {
  let component: ModalPartesComponent;
  let fixture: ComponentFixture<ModalPartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPartesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
