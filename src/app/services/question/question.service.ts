import { Injectable } from '@angular/core';
import * as globals from '../../shared/interface';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  public nextQuestion(): globals.question {
    return globals.questions[this.generate()];
  }

  public getQuestions(): globals.question[]{
    return globals.questions;
  }

  private generate(): number {
    return this.getRandomInt(0, (globals.questions.length - 1));
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  nextQuestionObs(questionsAnswered:globals.question[]):Observable <globals.question> {
    return  Observable.from(globals.questions).filter(question => !questionsAnswered.includes(question));
  }
}



