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
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AktualnosciComponent } from './aktualnosci/aktualnosci.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ONasComponent } from './o-nas/o-nas.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { StatutComponent } from './statut/statut.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SportGroupsComponent } from './sport-groups/sport-groups.component';
import { VolleyballTeamComponent } from './volleyball-team/volleyball-team.component';
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
    NewEventComponent,
    AktualnosciComponent,
    ONasComponent,
    GaleriaComponent,
    StatutComponent,
    SportGroupsComponent,
    VolleyballTeamComponent,
 
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
    MatNativeDateModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatSnackBarModule,
    CarouselModule 
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
