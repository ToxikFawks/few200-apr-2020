import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCurrent } from './reducers';
import { applicationStarted } from './actions/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front End Web 200';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrent);
  }
}
