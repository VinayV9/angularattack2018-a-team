import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionComponent} from './components/question/question.component';
import {QuestionGoogleFormComponent} from './components/question-google-form/question-google-form.component';
import {AudioQuestionComponent} from './components/audio-question/audio-question.component';

const routes: Routes = [
  { path: '', component: AudioQuestionComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'audio-question', component: AudioQuestionComponent },
  { path: 'question-form', component: QuestionGoogleFormComponent },
  { path: '**', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
