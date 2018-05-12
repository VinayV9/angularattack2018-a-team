import {Component, OnInit, Input} from '@angular/core';
import {question} from '../shared/interface';
import {QuestionService} from '../question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuestionService],
})
export class QuestionComponent implements OnInit {
  isTimeUp = false;
  question: question;
  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.initialise();
    this.refresh();
  }

  initialise(): void {
    //TODO
  }

  refresh(): void {
    this.question = this.questionService.nextQuestion();
  };

}
