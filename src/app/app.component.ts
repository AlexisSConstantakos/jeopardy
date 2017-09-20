import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy';

  userScore: number = 0;
  userAnswer: string;

  questionInfo;

  constructor(private jeopardyService: JeopardyService){}

  //method that uses the jeopardy service from api
  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
    .subscribe(
      questionInfo => {
        this.questionInfo = questionInfo[0];
        console.log(this.questionInfo.answer)
      }
    )
  }

sampleMethod(someString: string) {
  alert(someString)
}

//call the api on loading of the component to get the question
ngOnInit(){
  this.getDataFromService()
}


}

