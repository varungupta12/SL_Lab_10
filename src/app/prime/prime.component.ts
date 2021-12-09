import { Component,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent {

  @Input() num3!:string;

  res!:number;

  @Output() sendPrime = new EventEmitter<number>();

  check(n:number)
  {
    let isPrime = true;

    // looping through 2 to number-1
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        return 1;
    } else {
        return 0;
    }
  }

  prime(num: string)
  {
    this.res= this.check(parseInt(num));
    this.sendPrime.emit(this.res);
  }

}
