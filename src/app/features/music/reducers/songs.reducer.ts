import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/songs.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
}

export interface SongState extends EntityState<SongEntity> {

}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadSongsSucceeded, (cs, a) => adapter.setAll(a.payload, cs)),
  on(actions.songAdded, (cs, a) => adapter.addOne(a.payload, cs)),
  on(actions.songAddedSuccessfully, (cs, a) => {
    const tempState = adapter.removeOne(a.oldId, cs);
    return adapter.addOne(a.payload, tempState);
  }),
  on(actions.songAddedFailure, (cs, a) => adapter.removeOne(a.payload.id, cs))
);

export function reducer(state: SongState = initialState, action: Action) {
  return reducerFunction(state, action);
}
