import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  userScore: number = 0;
  userAnswer: string;
  @Input() questionInfo;
  @Output() finishedCheckingAnswer = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit() {
  }

  checkAnswer(){
    if(this.userAnswer == this.questionInfo.answer){
      this.userScore += this.questionInfo.value;
    }
    this.userAnswer = "";
    this.finishedCheckingAnswer.emit("the string from the child");
  }

}