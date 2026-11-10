import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Video } from './video/video';

@NgModule({
  declarations: [Video],
  imports: [
    CommonModule
  ],
  exports: [
    Video
  ]
})
export class VideoModule { }