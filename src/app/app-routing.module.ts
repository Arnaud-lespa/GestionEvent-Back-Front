import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { LoginComponent } from './login/login.component';
import { MesEventsComponent } from './mes-events/mes-events.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpdateEventComponent } from './update-event/update-event.component';


const routes: Routes = [
  { path : '', component : AccueilComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'mes-event', component : MesEventsComponent },
  { path : 'createEvent', component : CreateEventComponent },
  { path : 'reservation', component : ReservationComponent },
  { path : 'update/:id', component : UpdateEventComponent },
  { path : 'create/:id', component : CreateReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
