import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface User {
  name: string;
}

export interface Data {
  questions: Array<Question>
}

export interface Question {
  questionText: string;
  explanation: string;
  options: Array<{
    text: string;
    correct?: boolean;
  }>
}


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private user!: User;

  constructor( private http: HttpClient) { }

  getQuestionJson(): Observable<Data> {
    return this.http.get<Data>('assets/question.json')
  }

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}

