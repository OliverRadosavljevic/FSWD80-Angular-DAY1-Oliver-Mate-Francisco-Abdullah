import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { OurFoodComponent } from './our-food/our-food.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    HeroComponent,
    ContentComponent,
    FooterComponent,
    OurFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
