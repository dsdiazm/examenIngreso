import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';

import {AuthService} from './../services/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  registerForm= new FormGroup({
    name: new FormControl(''),
    cargo: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
  });

  constructor(private authSvc:AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onRegister(){
    const {name, email, password}=this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);
      if(user){
        this.router.navigate(['/home']);
      }
    } catch(error){
      console.log(error);
    }
  }
}
