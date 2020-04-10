import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CounterEffects } from './effects/counter.effects';
import { EffectsModule } from '@ngrx/effects';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CountingByComponent } from './components/counting-by/counting-by.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MusicModule } from './features/music/music.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DashboardComponent,
    NavComponent,
    SettingsComponent,
    CountingByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MusicModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
