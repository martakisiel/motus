import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { EventsComponent } from './events/events.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { NewEventComponent } from './new-event/new-event.component';

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
    ContactFormsComponent,
    CalendarComponent,
    EventsComponent,
    MainPageComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
