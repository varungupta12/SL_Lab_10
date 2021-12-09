import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {

  @Input() num1!:string;
  @Input() num2!:string;

  res!:number;

  @Output() sendDivision = new EventEmitter<number>();

  division(first: string, second: string)
  {
    this.res= parseInt(first) / parseInt(second);
    this.sendDivision.emit(this.res);
  }

}
