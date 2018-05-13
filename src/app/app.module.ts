import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialdesignModule } from './modules/material-design/material-design.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//components
import { NavbarComponent } from './components/navbar/navbar.component';
import {CountdownTimerComponent} from './components/countdown-timer/countdown-timer.component';
import {QuestionComponent} from './components/question/question.component';

//services
import { QuestionService } from './services/question/question.service';
import { QuestionGoogleFormComponent } from './components/question-google-form/question-google-form.component';
import { AudioQuestionComponent } from './components/audio-question/audio-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountdownTimerComponent,
    QuestionComponent,
    QuestionGoogleFormComponent,
    AudioQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialdesignModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
