import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { EventsComponent } from './events/events.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { NewEventComponent } from './new-event/new-event.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { ONasComponent } from './o-nas/o-nas.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { StatutComponent } from './statut/statut.component';
import { VolleyballTeamComponent } from './volleyball-team/volleyball-team.component';
import { WinterSwimmingTeamComponent } from './winter-swimming-team/winter-swimming-team.component';
import { SportGroupsListComponent } from './sport-groups-list/sport-groups-list.component';
import { SportGroupComponent } from './sport-group/sport-group.component';
import { SupportComponent } from './support/support.component';
import { FormComponent } from './form/form.component';
import { AdsComponent } from './ads/ads.component';
import { ElementAppComponent } from './element-app/element-app.component';
import { AlbumsNames } from './service.service';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  { path: '', component: MainPageComponent }, // bez redirecTo!
  { path: '#dolacz', component: JoinComponent },
  { path: '#wydarzenia', component: EventsComponent },
  { path: '#kontakt', component: ContactFormsComponent },
  { path: '#wesprzyj-nas', component: SupportComponent },
  { path: '#o-nas', component:  ONasComponent }, 
  { path: '#o-nas/:id', component:  StatutComponent }, 
  { path: '#sekcje', component:  SportGroupsListComponent }, //osobna strona lista sekcji
  { path: '#formularz', component:  FormComponent }, //osobna strona lista sekcji
  { path: '#galeria', component:  GaleriaComponent }, //osobna strona lista sekcji
  { path: '#album/:albumName', component: AlbumComponent },//album/:ktory to album
  { path: '#ad', component:  AdsComponent }, //osobna strona lista sekcji
  { path: '#komunikator', component:  ElementAppComponent }, 
  // { path: '#galeria', component:  GaleriaComponent }, 
  //{ path: '#album/:albumName', component: AlbumsNames },album  - sekcja/:która to sekcja

  { path: '#sekcje/:siatkowka', component:  VolleyballTeamComponent }, //konkretna sekcja/:nazwaSekcji dodawaj kolejne przy tworzeniu następnych sekcji
  { path: '#sekcje/:morsowanie', component:  WinterSwimmingTeamComponent }, //konkretna sekcja/:nazwaSekcji dodawaj kolejne przy tworzeniu następnych sekcji
  { path: '#siatkowka', component: VolleyballTeamComponent }, 
  { path: '#morsowanie', component:WinterSwimmingTeamComponent  }, //dodaj kolejną ścieżkę dla nowych componentów żeby działał link w menu
  // { path: '#sekcja/:groupName', component:  SportGroupComponent }, //konkretna sekcja/:nazwaSekcji

//  { path: '#galeria', component:  GaleriaComponent }, 
  { path: '#noweWydarzenie', component: NewEventComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
