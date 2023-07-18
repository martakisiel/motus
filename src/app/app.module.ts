import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { MenuComponent } from './menu/menu.component';
import { AdsComponent } from './ads/ads.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { JoinComponent } from './join/join.component';
import { GallerySampleComponent } from './gallery-sample/gallery-sample.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeBannerComponent,
    MenuComponent,
    AdsComponent,
    IntroductionComponent,
    FooterComponent,
    JoinComponent,
    GallerySampleComponent,
    ContactFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
