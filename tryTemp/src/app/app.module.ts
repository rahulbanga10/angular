import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RecentStoriesComponent } from './recent-stories/recent-stories.component';
import { FeaturedPostComponent } from './featured-post/featured-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    RecentStoriesComponent,
    FeaturedPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
