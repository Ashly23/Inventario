import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-estado',
  templateUrl: './model-estado.component.html',
  styleUrls: ['./model-estado.component.css']
})
export class ModelEstadoComponent implements OnInit {
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
