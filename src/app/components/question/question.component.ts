import { Component, OnInit, Input } from '@angular/core';
import { question } from '../../shared/interface';
import { QuestionService } from '../../services/question/question.service';
import {Observable} from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
import 'rxjs/add/observable/interval';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuestionService],
})
export class QuestionComponent implements OnInit {
  isTimeUp = false;
  questions: question[] = [];
  question: question;
  private questionSubscription: ISubscription;
  private rolloutNextQuestionSubs: ISubscription;
  selectedOption: string;
  questionAnswered: question[] = [];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.initialise();
    this.refresh();
    this.questionAnswered = [];

    // //Polls wether timer is elapsed 
    // //To polls if question is answered
    // //Todo reset timer 
   this.rolloutNextQuestionSubs = Observable.interval(10000)
     .subscribe((val) => { 
     if(this.isTimeUp) 
       this.questionSubscription = this.refreshTimer(); 
     });
  }

  initialise(): void {
    this.questions = this.questionService.getQuestions();
  }

  refresh(): void {
    this.question = this.questionService.nextQuestion();
  }

  refreshTimer(): ISubscription {
    return this.questionService.nextQuestionObs(this.questionAnswered).subscribe(
      question => setTimeout(() => { console.log('Question filtered: %s', question.label) }, 1000),
      e => console.log('onError: %s', e),
      () => console.log('onCompleted')
    );
  };

  ngOnDestroy() {
    this.rolloutNextQuestionSubs.unsubscribe();
  }
  /** TODO
   * This was meant to be used to move ot the next question automatically 
   * when the time out elapsed
   *
  isCompleted(question: question): boolean {
    return this.questionAnswered.includes(question);
  }
  // 1) Cancel timer bound question sequence current question

  passQuestion(): void {
    this.questionSubscription.unsubscribe();
    this.refresh();
  };
  */




}
