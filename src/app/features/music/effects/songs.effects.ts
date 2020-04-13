import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../.././environments/environment';
import * as songActions from '../actions/songs.actions';
import { SongEntity } from '../reducers/songs.reducer';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class SongsEffects {
  // songAdded => (send it to the APi, wait for a response ) => songAddedSuccessfully | songAddedFailure
  saveSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.songAdded),
      switchMap((originalAction) => this.client.post<SongEntity>(environment.songsUrl, {
        title: originalAction.payload.title,
        artist: originalAction.payload.artist,
        album: originalAction.payload.album,
        year: originalAction.payload.year
      }).pipe(
        map(result => songActions.songAddedSuccessfully({ oldId: originalAction.payload.id, payload: result })),
        catchError(response => of(songActions.songAddedFailure({ errorMessage: 'Jeff Hates that Band', payload: originalAction.payload })))
      ))
    )
    , { dispatch: true }
  );
  // loadSongs => loadSongsSucceeded
  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.loadSongs), // if it is a loadSongs
      switchMap(() => this.client.get<GetSongsResponse>(environment.songsUrl) // switch over to another stream (switchMap)
        .pipe(
          map(r => r.data), // { data: SongEntity[] } => SongEntity[]
          map(payload => songActions.loadSongsSucceeded({ payload })) // Dispatch the action!
        )
      )
    )
    , { dispatch: true }
  );
  constructor(private actions$: Actions, private client: HttpClient) { }
}
interface GetSongsResponse {
  data: SongEntity[];
}
