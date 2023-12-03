import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private stateSubject: BehaviorSubject<string> = new BehaviorSubject('');

  set searchCriteria(value: string) {
    this.stateSubject.next(value);
  }

  getState(): Observable<string> {
    return this.stateSubject.asObservable();
  }

  constructor() { }
}
