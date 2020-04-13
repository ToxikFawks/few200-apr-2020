import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { SongsEffects } from './effects/songs.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MusicComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppEffects, SongsEffects])
  ],
  exports: [MusicComponent]
})
export class MusicModule { }
