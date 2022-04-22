import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-partes',
  templateUrl: './modal-partes.component.html',
  styleUrls: ['./modal-partes.component.css']
})
export class ModalPartesComponent implements OnInit {
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
