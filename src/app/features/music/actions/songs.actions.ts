import { createAction, props } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

// this is the trigger, the initiating action
export const loadSongs = createAction(
  '[music songs] load the songs from the api'
);

export const loadSongsSucceeded = createAction(
  '[music songs] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);

// TODO: create one we dispatch if the api call failed
