import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { ContentBlockComponent } from './content-block/content-block.component';
import { ContentSectionComponent } from './content-block/content-section/content-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    NewsSliderComponent,
    ContentBlockComponent,
    ContentSectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
