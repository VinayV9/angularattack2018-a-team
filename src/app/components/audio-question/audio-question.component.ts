import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { question } from '../../shared/interface';

@Component({
  selector: 'app-audio-question',
  templateUrl: './audio-question.component.html',
  styleUrls: ['./audio-question.component.scss']
})
export class AudioQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay(){
      this.audioPlayerRef.nativeElement.play();
  }
  onAudioPause(){
    this.audioPlayerRef.nativeElement.pause();
  }

  @Input() public question:question;

}
