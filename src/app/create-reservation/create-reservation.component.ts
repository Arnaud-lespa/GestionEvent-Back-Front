import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRegistration } from '../models/IRegistration';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent {
  registerForm : FormGroup;
  id :number
  constructor(private _fb : FormBuilder, private _registrationService : RegistrationService, private _route : Router, private _activeRoute : ActivatedRoute) {
    this.id = parseInt(this._activeRoute.snapshot.params['id']);
    this.registerForm = this._fb.group({
      nbGuest : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    })
  }


  register() : void {
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerBody : IRegistration = this.registerForm.value;
     this._registrationService.join(this.id , registerBody).subscribe({
      next: (res) =>{

        this._route.navigateByUrl('/');

      },
      complete: ()=>{},
      error: ()=>{},
     })
    }
  }
}
