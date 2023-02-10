import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { IAuthUser } from '../models/IAuthResult';
import { IRegister } from '../models/IRegister';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm : FormGroup

  constructor(private _fb : FormBuilder, private _authService : AuthService, private _route : Router){
    this.registerForm =  this._fb.group({
      pseudo : [null, [Validators.required]],
      email : [null, [Validators.required, Validators.email]],
      birthdate : [null, [Validators.required]],
      lastname : [null, [Validators.required, Validators.maxLength(150)]],
      firstname : [null, [Validators.required,  Validators.maxLength(150)]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/)]],
    })
  }



  ngOnInit(): void {
      this._authService.$connectedUser.subscribe({
        next : (res : IAuthUser | undefined) => {
          if(res){
            this._route.navigateByUrl('/')
          }
        }
      })
  }

  register(){
    if(this.registerForm.valid){
      let registerBody : IRegister = this.registerForm.value
      this._authService.register(registerBody)
    }else{
      this.registerForm.markAllAsTouched()
    }
  }

}
