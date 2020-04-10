import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';

@Injectable()
export class CounterEffects {
  readCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted), // the right action? if not, stop here
      map(() => localStorage.getItem('by')), // retrieves '1', '3', '5', or null
      filter(by => by !== null), // if null, top here
      filter(by => by === '1' || by === '3' || by === '5'), // extra careful that '1', '3', '5'
      map(by => +by), // convert from string to number
      map(by => counterActions.countBySet({ by })) // dispatch an action back to the reducer
    ),
    { dispatch: true } // dispatch maybe?
  );

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    )
    , { dispatch: false }
  );

  // logThemAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(a.type))
  //   ), { dispatch: false }
  // );

  constructor(private actions$: Actions) { }
}
