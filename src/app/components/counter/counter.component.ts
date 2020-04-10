import { Component, OnInit } from '@angular/core';
import {
  AppState, selectCurrent, selectResetDisabled, selectCountingBy,
  selectCountingBy1Enabled, selectCountingBy3Enabled, selectCountingBy5Enabled
} from 'src/app/reducers';
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
  resetDisabled$: Observable<boolean>;
  by$: Observable<number>;
  countBy1Enabled$: Observable<boolean>;
  countBy3Enabled$: Observable<boolean>;
  countBy5Enabled$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.select(selectCurrent);
    this.resetDisabled$ = this.store.select(selectResetDisabled);
    this.by$ = this.store.select(selectCountingBy);
    this.countBy1Enabled$ = this.store.select(selectCountingBy1Enabled);
    this.countBy3Enabled$ = this.store.select(selectCountingBy3Enabled);
    this.countBy5Enabled$ = this.store.select(selectCountingBy5Enabled);
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

  countBySet(by: number) {
    this.store.dispatch(counterActions.countBySet({ by }));
  }

}
