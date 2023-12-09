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
import { SportGroupsComponent } from './sport-groups/sport-groups.component';
import { VolleyballTeamComponent } from './volleyball-team/volleyball-team.component';


const routes: Routes = [
  { path: '', component: MainPageComponent }, // bez redirecTo!
  { path: '#dolacz', component: JoinComponent },
  { path: '#wydarzenia', component: EventsComponent },
  { path: '#kontakt', component: ContactFormsComponent },
  { path: '#wesprzyj-nas', component: ContactFormsComponent },
  { path: '#o-nas', component:  ONasComponent }, 
  { path: '#o-nas/:id', component:  StatutComponent }, 
  // { path: '#sekcje', component:  SportGroupsComponent }, 
  { path: '#siatkowka', component: VolleyballTeamComponent }, 
  { path: '#galeria', component:  GaleriaComponent }, 
  { path: '#noweWydarzenie', component: NewEventComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
