import {Component, OnInit, Input} from '@angular/core';
import {question} from '../../shared/interface';
import {QuestionService} from '../../services/question/question.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QuestionService],
})
export class QuestionComponent implements OnInit {
  isTimeUp = false;
  questions: question[] = [];
  selectedOption: string;
  isLinear = false;
  firstFormGroup: FormGroup;

  constructor(private questionService: QuestionService,
              private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initialise();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.refresh();
  }

  initialise(): void {
    this.questions = this.questionService.getQuestions();
    console.log(this.questions);
  }

  refresh(): void {
    this.questions.push(this.questionService.nextQuestion());
  }

}
