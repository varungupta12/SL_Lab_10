import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {

  @Input() num3!:string;

  res!:number;

  @Output() sendFactorial = new EventEmitter<number>();

  fact(n:number):number {
    if (n === 0) {
      return 1;
    }
    // This is it! Recursion!!
    return n * this.fact(n - 1);
  }

  factorial(num: string)
  {
    this.res= this.fact(parseInt(num));
    this.sendFactorial.emit(this.res);
  }
}
