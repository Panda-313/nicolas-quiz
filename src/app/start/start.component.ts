import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  startQuiz() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }
}
