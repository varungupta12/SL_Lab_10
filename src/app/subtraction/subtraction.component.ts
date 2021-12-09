import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent{

  @Input() num1!:string;
  @Input() num2!:string;

  res!:number;

  @Output() sendSubtraction = new EventEmitter<number>();

  subtract(first: string, second: string)
  {
    this.res= parseInt(first) - parseInt(second);
    this.sendSubtraction.emit(this.res);
  }

}
