

// We need an effect that turns an applicationStarted action into whatever we want to have happen in this feature when the application starts.
// for us, right now, it will be to tell it to load the songs.

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as appActions from '../../../actions/app.actions';
import * as songsActions from '../actions/songs.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {

  // When the application is started we say we want to load the songs.
  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => songsActions.loadSongs())
    )
  );

  constructor(private actions$: Actions) { }
}
