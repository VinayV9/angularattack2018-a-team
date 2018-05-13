export class question {
  public label: string;
  public choices: choice[];
  public answer: number;
  public audioUrl: string;
  public timeAllocated: number;
};


export class choice {
  public option: string;
  public answer: boolean;
};


export const questions: question[] =

  [
    {
      label: 'Who is the original creator of AngularJS',
      choices: [
        {option: 'Brad Green', answer: false},
        {option: 'Kara Erickson', answer: false},
        {option: 'Misko Hevery', answer: true},
        {option: 'Max Sills', answer: false}
      ],
      answer: 2,
      audioUrl: '/assets/audio/q1_c.mp3',
      timeAllocated: 30
    },
    {
      label: 'What is the current version of angular?',
      choices: [{option: 'One', answer: false}, {option: 'Two', answer: false}, {option: 'Six', answer: false}, {
        option: 'Seven',
        answer: false
      }],
      answer: 2,
      audioUrl: '',
      timeAllocated: 10
    },
    {
      label: 'PWA stands for?',
      choices: [{option: 'personal web app', answer: false}, {
        option: 'personal windows app',
        answer: false
      }, {option: 'progressive web app', answer: false}, {option: 'post web address', answer: false}],
      answer: 2,
      audioUrl: '',
      timeAllocated: 20
    },
    {
      label: 'How will you create new Angular Project?',
      choices: [{option: 'ng create [app-name]', answer: false}, {
        option: 'ng build [app-name]',
        answer: false
      }, {option: 'ng new [app-name]', answer: false}, {option: 'ng-prepare [app-name]', answer: false}],
      answer: 2,
      audioUrl: '',
      timeAllocated: 25
    },

  ];
