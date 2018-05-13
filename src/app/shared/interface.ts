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
    label:'1Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:5
  },
  {
    label:'2What is the current version of angular?',
    choices: [{option: '1', answer: false }, {option: '2', answer: false }, {option: '6', answer: false }, {option: '7', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:10
  },
  {
    label:'3How many colors are their in rainbow?',
    choices: [{option: '3', answer: true }, {option: '7', answer: false }, {option: '1', answer: false }, {option: '4', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:11
  },
  {
    label:'4who is the artist of this alubum"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'../../../assets/audio/audio1.mp3',
    timeAllocated:30
  },
  {
    label:'5Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:20
  },
  {
    label:'6Which of these U.S Presidents appeared on the television series "laugh-In"?',
    choices: [{option: 'A', answer: false }, {option: 'B', answer: false }, {option: 'C', answer: false }, {option: 'D', answer: false }],
    answer:'ANSWER',
    audioUrl:'',
    timeAllocated:25
  },
  
];
  