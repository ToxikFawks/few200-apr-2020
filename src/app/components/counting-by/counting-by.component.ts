import { Component, OnInit } from '@angular/core';
import {
  AppState, selectCountingBy, selectCountingBy1Enabled, selectCountingBy3Enabled, selectCountingBy5Enabled
} from 'src/app/reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as counterActions from '../../actions/counter.actions';

@Component({
  selector: 'app-counting-by',
  templateUrl: './counting-by.component.html',
  styleUrls: ['./counting-by.component.scss']
})
export class CountingByComponent implements OnInit {

  by$: Observable<number>;
  countBy1Enabled$: Observable<boolean>;
  countBy3Enabled$: Observable<boolean>;
  countBy5Enabled$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.by$ = this.store.select(selectCountingBy);
    this.countBy1Enabled$ = this.store.select(selectCountingBy1Enabled);
    this.countBy3Enabled$ = this.store.select(selectCountingBy3Enabled);
    this.countBy5Enabled$ = this.store.select(selectCountingBy5Enabled);
  }

  countBySet(by: number) {
    this.store.dispatch(counterActions.countBySet({ by }));
  }

}
