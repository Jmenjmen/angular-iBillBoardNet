import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  answer$ = new BehaviorSubject<string>('');
  getAnswer(): Observable<string> {
      return this.answer$.asObservable();
  }

  giveAnswer(answer: string) {
      this.answer$.next(answer);
  }
  
}
