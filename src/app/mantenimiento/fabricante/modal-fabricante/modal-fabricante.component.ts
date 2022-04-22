import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-fabricante',
  templateUrl: './modal-fabricante.component.html',
  styleUrls: ['./modal-fabricante.component.css']
})
export class ModalFabricanteComponent implements OnInit {
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