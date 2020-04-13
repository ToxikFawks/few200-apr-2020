import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, createFeatureSelector } from '@ngrx/store';

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

// const initialState = adapter.getInitialState();
const initialState: SongState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'I Will Survive', artist: 'Gloria Gaynor', album: 'Super Disco Hits', year: 1978 },
    2: { id: '2', title: 'YMCA', artist: 'Village People', album: 'YMCA Album', year: 1976 }
  }
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: SongState = initialState, action: Action) {
  return reducerFunction(state, action);
}
