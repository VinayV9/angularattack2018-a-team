import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {timer} from 'rxjs';
// import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  secondsCount = 5; // todo: make this 30;
  @Output() timeUp = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    timer(1000, 1000).subscribe(() => {
      this.secondsCount -= 1;
      if (this.secondsCount === 0) {
        this.timeUp.emit(true);
      }
    });
  }

}
