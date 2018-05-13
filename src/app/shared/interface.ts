export class  question {
   public   label:string;
   public choices: choice[];
   public  answer: string;
   public  audioUrl: string;
   public timeAllocated:number;    
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
    audioUrl:'music',
    timeAllocated:5
  },
  {
    label:'What is the current version of angular?',
    choices: [{option: '1', answer: false }, {option: '2', answer: false }, {option: '6', answer: false }, {option: '7', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:10
  },
  {
    label:'How many colors are their in rainbow?',
    choices: [{option: '3', answer: false }, {option: '7', answer: false }, {option: '1', answer: false }, {option: '4', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:11
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:30
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:20
  },
  {
    label:'Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:25
  },
  
];
  