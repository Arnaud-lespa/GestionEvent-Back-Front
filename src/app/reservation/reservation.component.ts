import { Component } from '@angular/core';
import { IActivity } from '../models/IActivity';
import { ListEventService } from '../services/list-event.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  liste : IActivity[] = []
  currentMember : string | null =sessionStorage.getItem('userId')
  constructor( private _eventService : ListEventService){}

  ngOnInit(): void {
    this.currentMember=null
    this.currentMember =sessionStorage.getItem('userId')
    this._eventService.getAllInscrit().subscribe({

      next: (res) =>{

        this.liste=res

      },
      complete: ()=>{},
      error: ()=>{},
    })

  }
}
