import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() isButtonDisabled: boolean = false;
  @Output() agreeCountChange = new EventEmitter<number>();
  @Output() disagreeCountChange = new EventEmitter<number>();

  agreeClick() {
    this.isButtonDisabled = true;
    this.agreeCountChange.emit(1); 
  }

  disagreeClick() {
    this.isButtonDisabled = true;
    this.disagreeCountChange.emit(1); 
  }
}