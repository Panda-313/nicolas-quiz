import { Component, OnInit } from '@angular/core';
import { Data, Question, ServiceService } from "../service/service.service";


@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.scss']
})
export class Quiz1Component implements OnInit {
  public name: string = "";
  public questionList: Array<Question> = [];
  public currentQuestion: number = 0;
  public point: number = 0;
  counter = 60;

  constructor(private qs: ServiceService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestion()
  }

  getAllQuestion() {
    this.qs.getQuestionJson().subscribe((ref: Data) => {
      console.log(ref)
      this.questionList = ref.questions;
    })
  }

  nextQuestion() {
    this.currentQuestion++;
  }


  previousQuestion() {
    this.currentQuestion--;
  }
}
