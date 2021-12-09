import { Component, Input, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'calculator';

  @Input() num1!: number;
  @Input() num2!: number;
  @Input() num3!: number;

  res1!: number;
  res2!:number;

  getResult(result:number)
  {
    this.res1=result;
  }

  getResult2(result:number)
  {
    this.res2=result;
  }


  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action);
   }


}
