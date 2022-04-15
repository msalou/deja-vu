import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FeedComponent } from './components/feed/feed.component';

import * as  Cloudinary from 'cloudinary-core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import CloudinaryConfiguration from './cloudinary.config';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary, CloudinaryConfiguration),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
