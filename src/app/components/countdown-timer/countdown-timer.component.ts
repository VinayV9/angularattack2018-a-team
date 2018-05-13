import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {timer} from 'rxjs';
// import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  @Input ('secondsCount') secondsCount; // todo: make this 30;
  @Output() timeUp : EventEmitter <boolean> = new EventEmitter<boolean>();
  

  constructor() {
  }


  ngOnInit() {
    timer(1000, 1000).subscribe(() => {
      this.secondsCount -= 1;
      if (this.secondsCount === 0) {

         console.log("time is up");
        this.timeUp.emit(true);
      }
    });
  }


}
