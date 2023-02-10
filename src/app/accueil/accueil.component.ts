import { Component, OnInit } from '@angular/core';
import { IActivity } from '../models/IActivity';
import { ListEventService } from '../services/list-event.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  constructor(private _eventService : ListEventService , private _registrationService : RegistrationService){}
  liste : IActivity[] = []
  My : IActivity[] = []
  listeID: number[]=[]
  isInscrit :boolean= false


  currentMember : string | null =sessionStorage.getItem('userId')

  inscriptions(): void {
    this.currentMember=null
    this.currentMember =sessionStorage.getItem('userId')
    this._eventService.getAllInscrit().subscribe({

      next: (res) =>{
        this.My=res

        this.My.forEach(element => {
          this.listeID.push(element.id)
        });
      },
      complete: ()=>{},
      error: ()=>{},
    })

  }

  delete(id :number):void{
    this._eventService.delete(id).subscribe({
      next : () => {
        //La db ayant été modifiée lors de la suppression si tout s'est bien passé, on met la liste des musiques à jour
        this._eventService.getAll().subscribe({
          next : (res) => { this.liste = res }
        })
      }
    })
  }


  ngOnInit(): void {
    this.currentMember=null
    this.currentMember =sessionStorage.getItem('userId');

    this._eventService.getAll().subscribe({
      next: (res) =>{

        this.inscriptions()
       res.forEach(element => {
        console.log(element.id)
        if(!this.listeID.includes(element.id)){
          this.liste.push(element)
        }
       }


       );
      },
      complete: ()=>{},
      error: ()=>{},
    })
  }
}
