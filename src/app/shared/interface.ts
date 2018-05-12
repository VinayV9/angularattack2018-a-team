export class  question {
   public   label:string;
   public choices: choice[];
   public  answer: string;
   public  audioUrl: string;    
};

export class choice{
    public option: string;
    public answer: boolean;
};


export const questions : question[]= 

[
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'URL'
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'URL'
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'URL'
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'URL'
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'URL'
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'URL'
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'URL'
  }
];
  