import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ILoging } from '../models/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm : FormGroup

  constructor(private _fb : FormBuilder, private _authService : AuthService, private _route : Router){
    this.loginForm = this._fb.group({
      identifier : [null, [Validators.required]],
      password : [null, [Validators.required]],
    })
  }
  
  ngOnInit(): void {
      this._authService.$connectedUser.subscribe({
        next : (res) =>{
          if(res){
            this._route.navigateByUrl('/')
          }
        }
      })
  }

  login(){
    if (this.loginForm.valid){
        let loginBody : ILoging = this.loginForm.value
        this._authService.login(loginBody)
    }
  }
}
