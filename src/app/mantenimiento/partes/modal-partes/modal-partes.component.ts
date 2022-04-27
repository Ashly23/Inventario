import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-partes',
  templateUrl: './modal-partes.component.html',
  styleUrls: ['./modal-partes.component.css']
})
export class ModalPartesComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    
  }
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  CleanForm(){
    this.validateForm  = this.fb.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
    });
  }

}
