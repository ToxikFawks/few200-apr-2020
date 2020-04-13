export const featureName = 'musicFeature';
import * as fromSongs from './songs.reducer';
import * as fromUiHints from './ui-hints.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { SongListItemModel } from '../models';

export interface MusicState {
  songs: fromSongs.SongState;
  uiHints: fromUiHints.UiHintsState;
}

export const reducers: ActionReducerMap<MusicState> = {
  songs: fromSongs.reducer,
  uiHints: fromUiHints.reducer
};

// 1. feature selector
const selectMusicFeature = createFeatureSelector<MusicState>(featureName);

// 2. selector per branch
const selectSongsBranch = createSelector(selectMusicFeature, f => f.songs);
const selectUiHintsBranch = createSelector(selectMusicFeature, f => f.uiHints);

// 3. any helpers?
const { selectAll: selectArrayOfSongEntity } = fromSongs.adapter.getSelectors(selectSongsBranch);

// 4. what our component needs

// 4a. selector that returns a SongListItemModel[]
export const selectSongListItemModel = createSelector(
  selectArrayOfSongEntity,
  (songs) => songs.map(song => ({
    ...song, isTemporary: song.id.startsWith('T')
  } as SongListItemModel))
);
export const selectFeatureLoaded = createSelector(
  selectUiHintsBranch,
  b => b.songsLoaded
);
