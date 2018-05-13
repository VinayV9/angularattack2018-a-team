import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {timer} from 'rxjs';
// import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  
  // Reveive this value from the QuestionComponent based on current question
  @Input ('secondsCount') secondsCount; // todo: make this 30;
  
  // Message  QuestionComponent to inform of timeUp event
  @Output() timeUp : EventEmitter <boolean> = new EventEmitter<boolean>();

  // Message countDownEvent to  QuestionComponent
  @Output() countDownEvent : EventEmitter <number> = new EventEmitter<number>();
  

  constructor() {
  }


  ngOnInit() {
    timer(1000, 1000).subscribe(() => {
      this.secondsCount -= 1;
      this.countDownEvent.emit(this.secondsCount);
      if (this.secondsCount === 0) {

         console.log("time is up");
        this.timeUp.emit(true);
       
    });
  }


}
