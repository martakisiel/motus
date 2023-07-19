import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { EventsComponent } from './events/events.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { NewEventComponent } from './new-event/new-event.component';


const routes: Routes = [
  { path: '', component: MainPageComponent }, // bez redirecTo!
  { path: '#dolacz', component: JoinComponent },
  { path: '#wydarzenia', component: EventsComponent },
  { path: '#noweWydarzenie', component: NewEventComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
