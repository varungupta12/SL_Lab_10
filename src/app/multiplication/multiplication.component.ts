import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent{

  @Input() num1!:string;
  @Input() num2!:string;

  res!:number;

  @Output() sendMultiplication = new EventEmitter<number>();

  product(first: string, second: string)
  {
    this.res= parseInt(first) * parseInt(second);
    this.sendMultiplication.emit(this.res);
  }
}
