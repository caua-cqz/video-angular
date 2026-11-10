import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { VideoModule } from './video/video-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    VideoModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }