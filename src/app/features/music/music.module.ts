import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';



@NgModule({
  declarations: [MusicComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule
  ],
  exports: [MusicComponent]
})
export class MusicModule { }
