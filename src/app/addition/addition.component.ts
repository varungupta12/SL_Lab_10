import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css'],
})
export class AdditionComponent{

  @Input() num1!:string;
  @Input() num2!:string;

  res!:number;

  @Output() sendAddition = new EventEmitter<number>();

  add(first: string, second: string)
  {
    this.res= parseInt(first) + parseInt(second);
    this.sendAddition.emit(this.res);
  }

}
