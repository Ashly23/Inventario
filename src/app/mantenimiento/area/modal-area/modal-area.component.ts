import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal-area.component.html',
  styleUrls: ['./modal-area.component.css']
})
export class ModalAreaComponent implements OnInit {
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

