import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterActions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.select(state => state.counter.current);
  }

  increment() {
    this.store.dispatch(counterActions.countIncremented());
  }

  decrement() {
    this.store.dispatch(counterActions.countDecremented());

  }

  reset() {
    this.store.dispatch(counterActions.countReset());
  }

}
