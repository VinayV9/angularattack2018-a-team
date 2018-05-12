import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGoogleFormComponent } from './question-google-form.component';

describe('QuestionGoogleFormComponent', () => {
  let component: QuestionGoogleFormComponent;
  let fixture: ComponentFixture<QuestionGoogleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionGoogleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionGoogleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
