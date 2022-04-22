import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-empleado',
  templateUrl: './modal-empleado.component.html',
  styleUrls: ['./modal-empleado.component.css']
})
export class ModalEmpleadoComponent implements OnInit {
  isVisible = false;
  constructor() {}

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
}