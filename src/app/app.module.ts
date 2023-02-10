import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { MesEventsComponent } from './mes-events/mes-events.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { UpdateEventComponent } from './update-event/update-event.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AccueilComponent,
    MesEventsComponent,
    ReservationComponent,
    CreateEventComponent,
    CreateReservationComponent,
    UpdateEventComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
