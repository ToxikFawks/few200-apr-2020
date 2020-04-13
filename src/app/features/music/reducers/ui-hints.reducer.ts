import { Action, createReducer, on } from '@ngrx/store';
import * as songActions from '../actions/songs.actions';
export interface UiHintsState {
  songsLoaded: boolean;
}
const initialState: UiHintsState = {
  songsLoaded: false
};
const myReducer = createReducer(
  initialState,
  on(songActions.loadSongs, (s) => ({ ...s, songsLoaded: false })),
  on(songActions.loadSongsSucceeded, (s) => ({ ...s, songsLoaded: true }))
);
export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action);
}
