import { Component } from '@angular/core';
import { IActivity } from '../models/IActivity';
import { ListEventService } from '../services/list-event.service';

@Component({
  selector: 'app-mes-events',
  templateUrl: './mes-events.component.html',
  styleUrls: ['./mes-events.component.scss']
})
export class MesEventsComponent {

  private _url : string = 'https://localhost:7245/api/Activity/NextActivities';
  constructor(private _eventService : ListEventService){}
  liste : IActivity[] = []
  token : string | null= sessionStorage.getItem('token')
  currentMember : string | null= sessionStorage.getItem('userId')

  delete(id :number):void{
    this._eventService.delete(id).subscribe({
      next : () => {
        //La db ayant été modifiée lors de la suppression si tout s'est bien passé, on met la liste des musiques à jour
        this._eventService.getAll().subscribe({
          next : (res) => { this.liste = res
          this.ngOnInit() }
        })
      }
    })
  }

  ngOnInit(): void {
    this._eventService.getAll().subscribe({
      next: (res) =>{
        this.liste=res
       this.liste= this.liste.filter(m => this.currentMember===m.creatorId.toString())
        console.log(res)
      },
      complete: ()=>{},
      error: ()=>{},
    })
}

cancel(id :number):void{
  this._eventService.cancel(id).subscribe({
    next : () => {
      //La db ayant été modifiée lors de la suppression si tout s'est bien passé, on met la liste des musiques à jour
      this._eventService.getAll().subscribe({
        next : (res) => { this.liste = res }
      })
    }
  })
}
}
