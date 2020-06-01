import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { Html5videoComponent } from './players/html5video/html5video.component';
import { PlaybackControlsComponent } from './playback-controls/playback-controls.component';
import { PlaybackPageComponent } from './playback-page/playback-page.component';
import { PlayerGridComponent } from './player-grid/player-grid.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    Html5videoComponent,
    PlaybackControlsComponent,
    PlaybackPageComponent,
    PlayerGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatVideoModule,
    MatButtonModule,
    MatSliderModule,
    
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
