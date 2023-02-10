import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IActivity } from '../models/IActivity';
import { ListEventService } from '../services/list-event.service';


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {

  registerForm : FormGroup = this._fb.group({
    name : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    description : [null, [Validators.required]],
    startDate : [null , [Validators.required]],
    endDate : [null, [Validators.required]],
    maxGuest : [null, [Validators.required]]
  })
  isCreate : string | null=""
  id : number
  constructor(private _fb : FormBuilder, private _eventService : ListEventService, private _route : Router, private _activeRoute : ActivatedRoute) {
    this.id = parseInt(this._activeRoute.snapshot.params['id']);

  }

  ngOnInit(): void {

    this._eventService.getEventbyId(this.id).subscribe({
      next: (res) =>{

        this.registerForm=this.registerForm = this._fb.group({
          name : [res.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          description : [res.description, [Validators.required]],
          startDate : [(res.startDate) , [Validators.required]],
          endDate : [(res.endDate), [Validators.required]],
          maxGuest : [res.maxGuest, [Validators.required]]
        })
        },

      complete: ()=>{},
      error: ()=>{},

    })

  }

  register() : void {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerBody : IActivity = this.registerForm.value;
     this._eventService.update(this.id,registerBody).subscribe({
      next : () => {
        this._route.navigateByUrl('/gestion/myevents');
      }
    });
    this.isCreate=  sessionStorage.getItem('create');

    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
