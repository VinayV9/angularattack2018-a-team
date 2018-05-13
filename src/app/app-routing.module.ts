import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionComponent} from './components/question/question.component';
import {CountdownTimerComponent} from './components/countdown-timer/countdown-timer.component';
import {QuestionGoogleFormComponent} from './components/question-google-form/question-google-form.component';
import {AudioQuestionComponent} from './components/audio-question/audio-question.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuestionComponent },
  { path: 'audio-quiz', component: AudioQuestionComponent },
  { path: 'question-form', component: QuestionGoogleFormComponent },
  { path: '**', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
