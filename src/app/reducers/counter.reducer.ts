import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
};

const myReducer = createReducer(
  initialState,
  on(actions.countReset, (cs) => ({ ...cs, current: 0 })),
  on(actions.countIncremented, (cs) => ({ ...cs, current: cs.current + cs.by })),
  on(actions.countDecremented, (cs) => ({ ...cs, current: cs.current - cs.by })),
  on(actions.countBySet, (cs, a) => ({ ...cs, by: a.by }))
);

export function reducer(currentState: CounterState = initialState, action: Action): CounterState {
  return myReducer(currentState, action);
}
