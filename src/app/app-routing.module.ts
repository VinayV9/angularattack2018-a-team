import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionComponent} from './components/question/question.component';
import {CountdownTimerComponent} from './components/countdown-timer/countdown-timer.component';
import {QuestionGoogleFormComponent} from './components/question-google-form/question-google-form.component';
import {AudioQuestionComponent} from './components/audio-question/audio-question.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuestionComponent },
  { path: 'audio-quiz', component: AudioQuestionComponent },
=======
  // { path: '', component: AudioQuestionComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'audio-question', component: AudioQuestionComponent },
  { path: '', component: QuestionComponent },
>>>>>>> 06a61ca5d2b7449bf0ee44ec0839714af58b160b
  { path: 'question-form', component: QuestionGoogleFormComponent },
  { path: '**', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
