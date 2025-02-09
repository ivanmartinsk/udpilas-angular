import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
      // clear alert message on route change
      this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              if (this.keepAfterNavigationChange) {
                  // only keep for a single location change
                  this.keepAfterNavigationChange = false;
              } else {
                  // clear alert
                  this.subject.next(void 0);
              }
          }
      });
  }

  success(message: string, keepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.subject.next({ type: 'success', text: message });
  }

  warn(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'warn', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
      this.keepAfterNavigationChange = keepAfterNavigationChange;
      this.subject.next({ type: 'error', text: message });
  }

  clear(keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: '', text: null });
  }


  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}
